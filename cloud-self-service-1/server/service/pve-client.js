import { exec } from 'node:child_process';
import logger from '../logger.js';
import config from '../config.js';

// Proxmox API客户端类
class PveClient {
  constructor() {
    this.enabled = Boolean(
      config.pve?.enabled &&
      config.pve?.host &&
      config.pve?.username &&
      config.pve?.password
    );
    this.apiUrl = this.enabled ? `https://${config.pve.host}:${config.pve.port}/api2/json` : null;
    this.username = config.pve?.username || '';
    this.password = config.pve?.password || '';
    this.realm = config.pve?.realm || 'pam';
    this.token = null;
    this.tokenExpiry = null;
  }

  ensureConfigured() {
    if (!this.enabled) {
      throw new Error('PVE is not configured');
    }
  }

  // 获取身份验证令牌
  async getToken() {
    this.ensureConfigured();

    // 检查令牌是否有效
    if (this.token && this.tokenExpiry && this.tokenExpiry > Date.now()) {
      return this.token;
    }

    try {
      const response = await fetch(`${this.apiUrl}/access/ticket`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          realm: this.realm
        })
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || 'Failed to get PVE token');
      }

      if (payload?.data) {
        this.token = payload.data.ticket;
        this.tokenExpiry = Date.now() + (payload.data.CSRFPreventionToken ? 3600000 : 300000); // 1小时或5分钟
        return this.token;
      }
      throw new Error('Failed to get PVE token');
    } catch (error) {
      logger.error(`PVE authentication failed: ${error.message}`);
      throw error;
    }
  }

  // 创建API请求头
  async getHeaders() {
    const token = await this.getToken();
    return {
      'Authorization': `PVEAuthCookie=${token}`,
      'CSRFPreventionToken': this.csrfToken
    };
  }

  // 通用API请求方法
  async request(method, endpoint, data = null, params = null) {
    try {
      const headers = await this.getHeaders();
      const url = new URL(`${this.apiUrl}${endpoint}`);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            url.searchParams.set(key, value);
          }
        });
      }

      const options = {
        method,
        headers
      };

      if (data) {
        options.headers = {
          ...headers,
          'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(data);
      }

      const response = await fetch(url, options);
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || 'PVE API request failed');
      }

      return payload.data;
    } catch (error) {
      logger.error(`PVE API request failed: ${error.message}`);
      throw error;
    }
  }

  // 获取所有节点
  async getNodes() {
    return this.request('GET', '/nodes');
  }

  // 获取节点上的所有VM/CT
  async getNodeVmList(node) {
    return this.request('GET', `/nodes/${node}/qemu`);
  }

  async getNodeCtList(node) {
    return this.request('GET', `/nodes/${node}/lxc`);
  }

  // 创建VM
  async createVm(node, vmConfig) {
    return this.request('POST', `/nodes/${node}/qemu`, vmConfig);
  }

  // 创建CT
  async createCt(node, ctConfig) {
    return this.request('POST', `/nodes/${node}/lxc`, ctConfig);
  }

  // 启动VM/CT
  async startVm(node, vmid, type = 'qemu') {
    return this.request('POST', `/nodes/${node}/${type}/${vmid}/status/start`);
  }

  // 停止VM/CT
  async stopVm(node, vmid, type = 'qemu') {
    return this.request('POST', `/nodes/${node}/${type}/${vmid}/status/stop`);
  }

  // 强制停止VM/CT
  async shutdownVm(node, vmid, type = 'qemu') {
    return this.request('POST', `/nodes/${node}/${type}/${vmid}/status/shutdown`);
  }

  // 删除VM/CT
  async deleteVm(node, vmid, type = 'qemu') {
    return this.request('DELETE', `/nodes/${node}/${type}/${vmid}`);
  }

  // 获取VM/CT配置
  async getVmConfig(node, vmid, type = 'qemu') {
    return this.request('GET', `/nodes/${node}/${type}/${vmid}/config`);
  }

  // 更新VM/CT配置
  async updateVmConfig(node, vmid, config, type = 'qemu') {
    return this.request('PUT', `/nodes/${node}/${type}/${vmid}/config`, config);
  }

  // 获取VM/CT状态
  async getVmStatus(node, vmid, type = 'qemu') {
    return this.request('GET', `/nodes/${node}/${type}/${vmid}/status/current`);
  }

  // 绑定GPU到VM
  async bindGpu(node, vmid, gpuId) {
    // 示例：将GPU通过PCI passthrough绑定到VM
    const gpuConfig = {
      hostpci0: `0000:${gpuId},pcie=1,x-vga=1`
    };
    return this.updateVmConfig(node, vmid, gpuConfig);
  }

  // 解绑VM的GPU
  async unbindGpu(node, vmid) {
    // 示例：移除所有PCI passthrough设备
    const gpuConfig = {
      hostpci0: ''
    };
    return this.updateVmConfig(node, vmid, gpuConfig);
  }

  // 获取节点上的所有GPU
  async getNodeGpus(_node) {
    try {
      this.ensureConfigured();
      const command = `ssh ${config.pve.username}@${config.pve.host} lspci -nn | grep -i vga`;
      
      return new Promise((resolve, reject) => {
        exec(command, (error, stdout) => {
          if (error) {
            logger.error(`Failed to get GPU info: ${error.message}`);
            reject(error);
            return;
          }
          
          const gpus = [];
          stdout.split('\n').forEach(line => {
            if (line.trim()) {
              const match = line.match(/^(\d+:\d+\.\d+)\s+VGA\s+compatible\s+controller\s+\[\d+\.\d+\]\s*:\s*(.+?)\s+\[([0-9a-fA-F]+:[0-9a-fA-F]+)\]/);
              if (match) {
                gpus.push({
                  id: match[1],
                  name: match[2],
                  pciId: match[3]
                });
              }
            }
          });
          resolve(gpus);
        });
      });
    } catch (error) {
      logger.error(`Failed to get GPU list: ${error.message}`);
      return [];
    }
  }
}

// 导出单例实例
const pveClient = new PveClient();
export default pveClient;
