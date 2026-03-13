import nodemailer from 'nodemailer';
import logger from '../logger.js';
import config from '../config.js';

// 创建邮件传输器（重用）
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.auth.user,
    pass: config.smtp.auth.pass
  }
});

// 存储已发送邮件的信息和时间（避免重复发送）
const sentEmails = new Map();
const smtpConfigured = Boolean(config.smtp.host && config.smtp.auth.user && config.smtp.auth.pass);

// 检查是否应该发送邮件（控制频率）
const shouldSendEmail = (emailKey) => {
  const lastSentTime = sentEmails.get(emailKey);
  const emailMinInterval = config.emailMinInterval || 10; // 默认10分钟
  const currentTime = Date.now();

  return !lastSentTime || (currentTime - lastSentTime) > emailMinInterval * 60 * 1000;
};

const markEmailSent = (emailKey) => {
  sentEmails.set(emailKey, Date.now());
};

// 通用邮件发送函数（重用核心逻辑）
const sendEmail = async (receiverEmail, subject, message, sender = null) => {
  try {
    if (!smtpConfigured) {
      logger.warn(`SMTP is not fully configured, skip sending email: ${subject}`);
      return false;
    }

    const finalSender = sender || config.smtp.auth.user;
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head lang="zh-CN">
          <meta charset="UTF-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            .title { color: #14B8A6; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
            .info-item { margin: 8px 0; }
            .label { font-weight: bold; display: inline-block; width: 120px; }
            .value { display: inline-block; }
            .timestamp { color: #666; font-size: 12px; margin-top: 20px; text-align: right; }
          </style>
      </head>
      <body>
        <div class="content">
          ${message}
          <div class="timestamp">发送时间: ${new Date().toLocaleString('zh-CN')}</div>
        </div>
      </body>
      </html>
    `;

    // 发送邮件给每个收件人
    for (const email of Array.isArray(receiverEmail) ? receiverEmail : [receiverEmail]) {
      await transporter.sendMail({
        from: finalSender,
        to: email,
        subject: subject,
        html: htmlContent
      });
      logger.info(`邮件已发送至: ${email}`);
    }
    return true;
  } catch (emailError) {
    logger.error(`发送邮件失败: ${emailError.message}`);
    return false;
  }
};

export const sendInitialPasswordEmail = async (userInfo, initialPassword, receiverEmail) => {
  const emailKey = `initial-password-${userInfo.email}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = '[系统通知] 您的云平台账号已创建';
  const message = `
    <div class="title">账号创建成功</div>
    <div class="info-item"><span class="label">用户昵称:</span> <span class="value">${userInfo.nickname}</span></div>
    <div class="info-item"><span class="label">登录邮箱:</span> <span class="value">${userInfo.email}</span></div>
    <div class="info-item"><span class="label">账号角色:</span> <span class="value">${userInfo.role}</span></div>
    <div class="info-item"><span class="label">初始密码:</span> <span class="value">${initialPassword}</span></div>
    <p style="margin-top:16px;color:#666;font-size:13px;">首次登录后请立即修改密码。</p>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

export const sendApplicationReviewResult = async (userInfo, applicationInfo, approved, receiverEmail) => {
  const emailKey = `application-review-${applicationInfo.id}-${approved ? 'approved' : 'rejected'}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = approved
    ? '[系统通知] 您的服务器申请已通过'
    : '[系统通知] 您的服务器申请未通过';
  const message = approved
    ? `
      <div class="title">服务器申请已通过</div>
      <div class="info-item"><span class="label">用户:</span> <span class="value">${userInfo.nickname || userInfo.email}</span></div>
      <div class="info-item"><span class="label">申请编号:</span> <span class="value">#${applicationInfo.id}</span></div>
      <div class="info-item"><span class="label">配置:</span> <span class="value">${applicationInfo.cpu} vCPU / ${applicationInfo.memoryGb} GB / ${applicationInfo.storage} GB / ${applicationInfo.duration} 天</span></div>
      <div class="info-item"><span class="label">审批结果:</span> <span class="value">已通过</span></div>
      <p style="margin-top:16px;color:#666;font-size:13px;">您可以登录系统查看实例状态和后续操作。</p>
    `
    : `
      <div class="title">服务器申请未通过</div>
      <div class="info-item"><span class="label">用户:</span> <span class="value">${userInfo.nickname || userInfo.email}</span></div>
      <div class="info-item"><span class="label">申请编号:</span> <span class="value">#${applicationInfo.id}</span></div>
      <div class="info-item"><span class="label">配置:</span> <span class="value">${applicationInfo.cpu} vCPU / ${applicationInfo.memoryGb} GB / ${applicationInfo.storage} GB / ${applicationInfo.duration} 天</span></div>
      <div class="info-item"><span class="label">审批结果:</span> <span class="value">已拒绝</span></div>
      <div class="info-item"><span class="label">原因:</span> <span class="value">${applicationInfo.reason || '未填写审批意见'}</span></div>
    `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 1. 虚拟机/容器创建成功通知
export const sendVmCreateSuccess = async (user, vmInfo, receiverEmail) => {
  const emailKey = `vm-create-success-${user}-${vmInfo.name}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 虚拟机/容器创建成功`;
  const message = `
    <div class="title">虚拟机/容器创建成功通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">实例类型:</span> <span class="value">${vmInfo.type}</span></div>
    <div class="info-item"><span class="label">实例名称:</span> <span class="value">${vmInfo.name}</span></div>
    <div class="info-item"><span class="label">实例ID:</span> <span class="value">${vmInfo.id}</span></div>
    <div class="info-item"><span class="label">配置:</span> <span class="value">${vmInfo.config}</span></div>
    <div class="info-item"><span class="label">主机:</span> <span class="value">${vmInfo.host}</span></div>
    <div class="info-item"><span class="label">IP地址:</span> <span class="value">${vmInfo.ip || 'N/A'}</span></div>
    <div class="info-item"><span class="label">到期日期:</span> <span class="value">${vmInfo.expireDate || '无'}</span></div>
    <div class="info-item"><span class="label">状态:</span> <span class="value">${vmInfo.status}</span></div>
    <div class="info-item"><span class="label">创建时间:</span> <span class="value">${new Date(vmInfo.createdAt).toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 2. 虚拟机/容器创建失败通知
export const sendVmCreateFailed = async (user, vmInfo, error, receiverEmail) => {
  const emailKey = `vm-create-failed-${user}-${vmInfo.name}-${error.message}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 虚拟机/容器创建失败`;
  const message = `
    <div class="title">虚拟机/容器创建失败通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">实例类型:</span> <span class="value">${vmInfo.type}</span></div>
    <div class="info-item"><span class="label">实例名称:</span> <span class="value">${vmInfo.name}</span></div>
    <div class="info-item"><span class="label">请求配置:</span> <span class="value">${vmInfo.config}</span></div>
    <div class="info-item"><span class="label">错误信息:</span> <span class="value">${error.message}</span></div>
    <div class="info-item"><span class="label">请求时间:</span> <span class="value">${new Date(vmInfo.requestTime || Date.now()).toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 3. 虚拟机/容器关机通知
export const sendVmShutdown = async (user, vmInfo, reason, receiverEmail) => {
  const emailKey = `vm-shutdown-${user}-${vmInfo.id}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 虚拟机/容器已关机`;
  const message = `
    <div class="title">虚拟机/容器关机通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">实例类型:</span> <span class="value">${vmInfo.type}</span></div>
    <div class="info-item"><span class="label">实例名称:</span> <span class="value">${vmInfo.name}</span></div>
    <div class="info-item"><span class="label">实例ID:</span> <span class="value">${vmInfo.id}</span></div>
    <div class="info-item"><span class="label">关机原因:</span> <span class="value">${reason}</span></div>
    <div class="info-item"><span class="label">关机时间:</span> <span class="value">${new Date().toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 3. 虚拟机/容器释放通知
export const sendVmRelease = async (user, vmInfo, reason, receiverEmail) => {
  const emailKey = `vm-release-${user}-${vmInfo.id}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 虚拟机/容器已释放`;
  const message = `
    <div class="title">虚拟机/容器释放通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">实例类型:</span> <span class="value">${vmInfo.type}</span></div>
    <div class="info-item"><span class="label">实例名称:</span> <span class="value">${vmInfo.name}</span></div>
    <div class="info-item"><span class="label">实例ID:</span> <span class="value">${vmInfo.id}</span></div>
    <div class="info-item"><span class="label">释放原因:</span> <span class="value">${reason}</span></div>
    <div class="info-item"><span class="label">释放时间:</span> <span class="value">${new Date().toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 4. 虚拟机/容器启动失败通知
export const sendVmStartFailed = async (user, vmInfo, error, receiverEmail) => {
  const emailKey = `vm-start-failed-${user}-${vmInfo.id}-${error.message}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 虚拟机/容器启动失败`;
  const message = `
    <div class="title">虚拟机/容器启动失败通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">实例类型:</span> <span class="value">${vmInfo.type}</span></div>
    <div class="info-item"><span class="label">实例名称:</span> <span class="value">${vmInfo.name}</span></div>
    <div class="info-item"><span class="label">实例ID:</span> <span class="value">${vmInfo.id}</span></div>
    <div class="info-item"><span class="label">错误信息:</span> <span class="value">${error.message}</span></div>
    <div class="info-item"><span class="label">尝试时间:</span> <span class="value">${new Date().toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 5. 数据申请失败通知
export const sendDataRequestFailed = async (user, dataInfo, error, receiverEmail) => {
  const emailKey = `data-request-failed-${user}-${dataInfo.name}-${error.message}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 数据申请失败`;
  const message = `
    <div class="title">数据申请失败通知</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">数据名称:</span> <span class="value">${dataInfo.name}</span></div>
    <div class="info-item"><span class="label">数据ID:</span> <span class="value">${dataInfo.id}</span></div>
    <div class="info-item"><span class="label">数据类型:</span> <span class="value">${dataInfo.type}</span></div>
    <div class="info-item"><span class="label">申请用途:</span> <span class="value">${dataInfo.purpose}</span></div>
    <div class="info-item"><span class="label">错误信息:</span> <span class="value">${error.message}</span></div>
    <div class="info-item"><span class="label">申请时间:</span> <span class="value">${new Date(dataInfo.requestTime || Date.now()).toLocaleString('zh-CN')}</span></div>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 6. 服务器即将到期预警
export const sendExpiryWarning = async (user, serverInfo, receiverEmail) => {
  const emailKey = `expiry-warning-${serverInfo.id}-${serverInfo.daysLeft}`;
  if (!shouldSendEmail(emailKey)) return false;

  const subject = `[系统通知] 您的服务器即将在 ${serverInfo.daysLeft} 天后到期`;
  const message = `
    <div class="title">服务器到期提醒</div>
    <div class="info-item"><span class="label">用户:</span> <span class="value">${user}</span></div>
    <div class="info-item"><span class="label">服务器名称:</span> <span class="value">${serverInfo.name}</span></div>
    <div class="info-item"><span class="label">剩余天数:</span> <span class="value">${serverInfo.daysLeft} 天</span></div>
    <div class="info-item"><span class="label">到期时间:</span> <span class="value">${new Date(serverInfo.expireAt).toLocaleString('zh-CN')}</span></div>
    <p style="margin-top:16px;color:#666;font-size:13px;">请及时申请续期，避免服务中断。</p>
  `;

  const sent = await sendEmail(receiverEmail, subject, message);
  if (sent) {
    markEmailSent(emailKey);
  }
  return sent;
};

// 导出所有邮件发送函数
export default {
  sendInitialPasswordEmail,
  sendApplicationReviewResult,
  sendVmCreateSuccess,
  sendVmCreateFailed,
  sendVmShutdown,
  sendVmRelease,
  sendVmStartFailed,
  sendDataRequestFailed,
  sendExpiryWarning
};
