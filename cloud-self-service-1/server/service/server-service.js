import { prisma } from './prisma.js';
import logger from '../logger.js';
import pveClient from './pve-client.js';
import { sendVmCreateSuccess, sendVmCreateFailed, sendVmShutdown, sendVmRelease, sendVmStartFailed } from './email-service.js';

// 服务器管理服务
class ServerService {
  constructor() {
    this.prisma = prisma;
    this.pveClient = pveClient;
  }

  // 1. 创建虚拟机
  async createVm(userId, applicationId, _vmSpecs) {
    try {
      logger.info(`Creating VM for user ${userId}, application ${applicationId}`);
      
      // 从数据库获取申请信息
      const application = await this.prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: { user: true }
      });
      
      if (!application) {
        throw new Error('Server application not found');
      }
      
      // 生成VM名称
      const vmName = `vm-${userId}-${Date.now()}`;
      
      // PVE VM配置
      const pveVmConfig = {
        vmid: await this.getNextVmId(),
        name: vmName,
        memory: application.memory,
        cores: application.cpu,
        disk: application.storage,
        net0: 'virtio,bridge=vmbr0',
        ostype: 'l26',
        boot: 'c',
        ide2: 'local:iso/ubuntu-22.04.1-live-server-amd64.iso,media=cdrom',
        scsi0: `local-lvm:${Math.ceil(application.storage / 1024)}`,
        scsihw: 'virtio-scsi-pci',
        serial0: 'socket',
        vga: 'serial0',
        agent: '1'
      };
      
      // 获取可用PVE节点
      const nodes = await this.pveClient.getNodes();
      const targetNode = nodes[0].node; // 简单起见，使用第一个节点
      
      // 创建VM
      await this.pveClient.createVm(targetNode, pveVmConfig);
      
      // 创建数据库记录
      const server = await this.prisma.server.create({
        data: {
          applicationId,
          userId,
          status: 'RUNNING',
          expireAt: new Date(Date.now() + application.duration * 24 * 60 * 60 * 1000),
          pveVmId: pveVmConfig.vmid,
          pveNode: targetNode,
          pveType: 'qemu',
          pveName: vmName,
          pveConfig: pveVmConfig,
          gpuId: application.gpu ? await this.assignGpu(targetNode, pveVmConfig.vmid) : null
        },
        include: {
          application: true,
          user: true
        }
      });
      
      // 发送创建成功邮件
      await sendVmCreateSuccess(
        application.user.email,
        {
          type: '虚拟机',
          name: vmName,
          id: pveVmConfig.vmid,
          config: `${application.cpu}核 ${application.memory}MB ${application.storage}GB`,
          host: targetNode,
          status: 'RUNNING',
          createdAt: server.createdAt,
          expireDate: server.expireAt
        },
        [application.user.email]
      );
      
      return server;
    } catch (error) {
      logger.error(`Failed to create VM: ${error.message}`);
      
      // 发送创建失败邮件
      const application = await this.prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: { user: true }
      });
      
      if (application) {
        await sendVmCreateFailed(
          application.user.email,
          {
            name: `vm-${userId}-${Date.now()}`,
            type: '虚拟机'
          },
          error,
          [application.user.email]
        );
      }
      
      throw error;
    }
  }

  // 2. 创建容器
  async createContainer(userId, applicationId, _containerSpecs) {
    try {
      logger.info(`Creating container for user ${userId}, application ${applicationId}`);
      
      // 从数据库获取申请信息
      const application = await this.prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: { user: true }
      });
      
      if (!application) {
        throw new Error('Server application not found');
      }
      
      // 生成容器名称
      const containerName = `ct-${userId}-${Date.now()}`;
      
      // PVE容器配置
      const pveCtConfig = {
        vmid: await this.getNextVmId(),
        hostname: containerName,
        memory: application.memory,
        cores: application.cpu,
        disk: application.storage,
        net0: 'name=eth0,bridge=vmbr0,ip=dhcp',
        ostemplate: 'local:vztmpl/ubuntu-22.04-standard_22.04-1_amd64.tar.zst',
        unprivileged: 1,
        password: 'changeme'
      };
      
      // 获取可用PVE节点
      const nodes = await this.pveClient.getNodes();
      const targetNode = nodes[0].node;
      
      // 创建容器
      await this.pveClient.createCt(targetNode, pveCtConfig);
      
      // 创建数据库记录
      const server = await this.prisma.server.create({
        data: {
          applicationId,
          userId,
          status: 'RUNNING',
          expireAt: new Date(Date.now() + application.duration * 24 * 60 * 60 * 1000),
          pveVmId: pveCtConfig.vmid,
          pveNode: targetNode,
          pveType: 'lxc',
          pveName: containerName,
          pveConfig: pveCtConfig
        },
        include: {
          application: true,
          user: true
        }
      });
      
      // 发送创建成功邮件
      await sendVmCreateSuccess(
        application.user.email,
        {
          type: '容器',
          name: containerName,
          id: pveCtConfig.vmid,
          config: `${application.cpu}核 ${application.memory}MB ${application.storage}GB`,
          host: targetNode,
          status: 'RUNNING',
          createdAt: server.createdAt,
          expireDate: server.expireAt
        },
        [application.user.email]
      );
      
      return server;
    } catch (error) {
      logger.error(`Failed to create container: ${error.message}`);
      
      // 发送创建失败邮件
      const application = await this.prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: { user: true }
      });
      
      if (application) {
        await sendVmCreateFailed(
          application.user.email,
          {
            name: `ct-${userId}-${Date.now()}`,
            type: '容器'
          },
          error,
          [application.user.email]
        );
      }
      
      throw error;
    }
  }

  // 3. 关闭虚拟机/容器
  async stopServer(serverId, userId) {
    try {
      logger.info(`Stopping server ${serverId} for user ${userId}`);
      
      // 获取服务器信息
      const server = await this.prisma.server.findUnique({
        where: { id: serverId },
        include: { user: true, application: true }
      });
      
      if (!server) {
        throw new Error('Server not found');
      }
      
      if (server.userId !== userId && server.user.role !== 'ADMIN') {
        throw new Error('Permission denied');
      }
      
      // 1. 关闭前解绑GPU
      if (server.gpuId) {
        await this.pveClient.unbindGpu(server.pveNode, server.pveVmId, server.pveType);
      }
      
      // 2. 关闭服务器
      await this.pveClient.stopVm(server.pveNode, server.pveVmId, server.pveType);
      
      // 3. 更新数据库状态
      const updatedServer = await this.prisma.server.update({
        where: { id: serverId },
        data: {
          status: 'STOPPED'
        }
      });
      
      // 4. 发送关闭通知邮件
      await sendVmShutdown(
        server.user.email,
        {
          type: server.pveType === 'qemu' ? '虚拟机' : '容器',
          name: server.pveName,
          id: server.pveVmId
        },
        '用户手动关闭',
        [server.user.email]
      );
      
      return updatedServer;
    } catch (error) {
      logger.error(`Failed to stop server ${serverId}: ${error.message}`);
      throw error;
    }
  }

  // 4. 释放虚拟机/容器
  async releaseServer(serverId, userId) {
    try {
      logger.info(`Releasing server ${serverId} for user ${userId}`);
      
      // 获取服务器信息
      const server = await this.prisma.server.findUnique({
        where: { id: serverId },
        include: { user: true, application: true }
      });
      
      if (!server) {
        throw new Error('Server not found');
      }
      
      if (server.userId !== userId && server.user.role !== 'ADMIN') {
        throw new Error('Permission denied');
      }
      
      // 1. 如果服务器正在运行，先停止
      if (server.status === 'RUNNING') {
        await this.pveClient.stopVm(server.pveNode, server.pveVmId, server.pveType);
      }
      
      // 2. 从PVE中删除
      await this.pveClient.deleteVm(server.pveNode, server.pveVmId, server.pveType);
      
      // 3. 更新数据库状态
      const updatedServer = await this.prisma.server.update({
        where: { id: serverId },
        data: {
          status: 'DELETED'
        }
      });
      
      // 4. 发送释放通知邮件
      await sendVmRelease(
        server.user.email,
        {
          type: server.pveType === 'qemu' ? '虚拟机' : '容器',
          name: server.pveName,
          id: server.pveVmId
        },
        '用户手动释放',
        [server.user.email]
      );
      
      return updatedServer;
    } catch (error) {
      logger.error(`Failed to release server ${serverId}: ${error.message}`);
      throw error;
    }
  }

  // 5. 获取用户虚拟机/容器列表并同步状态
  async getUserServers(userId, syncStatus = true) {
    try {
      logger.info(`Getting servers for user ${userId}, syncStatus: ${syncStatus}`);
      
      // 从数据库获取用户服务器
      let servers = await this.prisma.server.findMany({
        where: {
          userId,
          status: { not: 'DELETED' }
        },
        include: {
          application: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      
      // 如果需要同步状态
      if (syncStatus) {
        servers = await this.syncServerStatuses(servers);
      }
      
      return servers;
    } catch (error) {
      logger.error(`Failed to get user servers: ${error.message}`);
      throw error;
    }
  }

  // 同步服务器状态
  async syncServerStatuses(servers) {
    const updatedServers = [];
    
    for (const server of servers) {
      try {
        // 从PVE获取最新状态
        const pveStatus = await this.pveClient.getVmStatus(
          server.pveNode, 
          server.pveVmId, 
          server.pveType
        );
        
        let newStatus = 'RUNNING';
        if (pveStatus.status === 'stopped') {
          newStatus = 'STOPPED';
        }
        
        // 如果状态变化，更新数据库
        if (newStatus !== server.status) {
          const updatedServer = await this.prisma.server.update({
            where: { id: server.id },
            data: {
              status: newStatus
            },
            include: {
              application: true
            }
          });
          updatedServers.push(updatedServer);
        } else {
          updatedServers.push(server);
        }
      } catch (error) {
        logger.error(`Failed to sync server ${server.id} status: ${error.message}`);
        updatedServers.push(server); // 保留原有数据
      }
    }
    
    return updatedServers;
  }

  // 6. 获取物理机上的虚拟机/容器列表并查询数据库信息
  async getHostServers(hostName) {
    try {
      logger.info(`Getting servers on host ${hostName}`);
      
      // 从PVE获取节点上的所有VM和容器
      const vmList = await this.pveClient.getNodeVmList(hostName);
      const ctList = await this.pveClient.getNodeCtList(hostName);
      
      // 合并VM和容器
      const pveInstances = [
        ...vmList.map(vm => ({ ...vm, type: 'qemu' })),
        ...ctList.map(ct => ({ ...ct, type: 'lxc' }))
      ];
      
      // 从数据库查询每个实例的信息
      const hostServers = [];
      for (const instance of pveInstances) {
        try {
          // 获取配置信息
          const config = await this.pveClient.getVmConfig(
            hostName, 
            instance.vmid, 
            instance.type
          );
          
          // 从数据库查询对应记录
          const dbServer = await this.prisma.server.findFirst({
            where: {
              pveVmId: instance.vmid,
              pveType: instance.type
            },
            include: {
              user: true,
              application: true
            }
          });
          
          hostServers.push({
            pveInfo: instance,
            config,
            dbInfo: dbServer || null
          });
        } catch (error) {
          logger.error(`Failed to get info for instance ${instance.vmid}: ${error.message}`);
          hostServers.push({
            pveInfo: instance,
            config: null,
            dbInfo: null,
            error: error.message
          });
        }
      }
      
      return hostServers;
    } catch (error) {
      logger.error(`Failed to get host servers: ${error.message}`);
      throw error;
    }
  }

  // 启动服务器（自动关联GPU）
  async startServer(serverId, userId) {
    try {
      logger.info(`Starting server ${serverId} for user ${userId}`);
      
      // 获取服务器信息
      const server = await this.prisma.server.findUnique({
        where: { id: serverId },
        include: { user: true }
      });
      
      if (!server) {
        throw new Error('Server not found');
      }
      
      if (server.userId !== userId && server.user.role !== 'ADMIN') {
        throw new Error('Permission denied');
      }
      
      // 1. 启动服务器
      await this.pveClient.startVm(server.pveNode, server.pveVmId, server.pveType);
      
      // 2. 如果有GPU配置，重新关联GPU
      if (server.gpuId) {
        await this.pveClient.bindGpu(server.pveNode, server.pveVmId, server.gpuId);
      }
      
      // 3. 更新数据库状态
      const updatedServer = await this.prisma.server.update({
        where: { id: serverId },
        data: {
          status: 'RUNNING'
        }
      });
      
      return updatedServer;
    } catch (error) {
      logger.error(`Failed to start server ${serverId}: ${error.message}`);
      
      // 发送启动失败邮件
      const server = await this.prisma.server.findUnique({
        where: { id: serverId },
        include: { user: true }
      });
      
      if (server) {
        await sendVmStartFailed(
          server.user.email,
          {
            type: server.pveType === 'qemu' ? '虚拟机' : '容器',
            name: server.pveName,
            id: server.pveVmId
          },
          error,
          [server.user.email]
        );
      }
      
      throw error;
    }
  }

  // 获取下一个可用的VM ID
  async getNextVmId() {
    try {
      // 从PVE获取所有节点的VM/CT列表，找到最大的VM ID
      const nodes = await this.pveClient.getNodes();
      let maxVmId = 100;
      
      for (const node of nodes) {
        const vmList = await this.pveClient.getNodeVmList(node.node);
        const ctList = await this.pveClient.getNodeCtList(node.node);
        
        const allVms = [...vmList, ...ctList];
        for (const vm of allVms) {
          if (vm.vmid > maxVmId) {
            maxVmId = vm.vmid;
          }
        }
      }
      
      return maxVmId + 1;
    } catch (error) {
      logger.error(`Failed to get next VM ID: ${error.message}`);
      return Math.floor(Math.random() * 1000) + 100; // 回退方案
    }
  }

  // 分配GPU
  async assignGpu(node, vmid) {
    try {
      // 获取节点上的可用GPU
      const gpus = await this.pveClient.getNodeGpus(node);
      
      if (gpus.length === 0) {
        throw new Error('No GPU available on this node');
      }
      
      // 简单分配第一个可用GPU（实际项目中应实现更复杂的分配策略）
      const gpu = gpus[0];
      
      // 绑定GPU到VM
      await this.pveClient.bindGpu(node, vmid, gpu.id);
      
      return gpu.id;
    } catch (error) {
      logger.error(`Failed to assign GPU: ${error.message}`);
      return null;
    }
  }

  // 健康检查
  async healthCheck() {
    try {
      // 检查PVE连接
      const nodes = await this.pveClient.getNodes();
      // 检查数据库连接
      const userCount = await this.prisma.user.count();
      
      return {
        pveConnected: true,
        pveNodes: nodes.length,
        dbConnected: true,
        userCount
      };
    } catch (error) {
      logger.error(`Health check failed: ${error.message}`);
      return {
        pveConnected: false,
        pveNodes: 0,
        dbConnected: false,
        userCount: 0,
        error: error.message
      };
    }
  }
}

// 导出服务实例
const serverService = new ServerService();
export default serverService;
export { ServerService };
