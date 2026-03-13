import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { prisma } from '../service/prisma.js';
import config from '../config.js';

// 导入路由
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';

// 导入定时任务
import { startExpiryService } from '../service/expiry-service.js';

// 初始化Fastify服务器
const fastify = Fastify({
  logger: true
});

// 注册插件
fastify.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

fastify.register(jwt, {
  secret: 'your-secret-key-change-in-production'
});

// 将Prisma客户端添加到Fastify实例
fastify.decorate('prisma', prisma);

// 注册路由
fastify.register(authRoutes, { prefix: '/api/auth' });
fastify.register(userRoutes, { prefix: '/api/user' });
fastify.register(adminRoutes, { prefix: '/api/admin' });

// 启动服务器
const start = async () => {
  try {
    await fastify.listen({
      port: config.port,
      host: '0.0.0.0'
    });
    fastify.log.info(`Server is running on http://localhost:${config.port}`);
    startExpiryService();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
