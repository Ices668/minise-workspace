import { sendApplicationReviewResult } from '../../service/email-service.js';

async function authenticate(request, reply) {
  try {
    await request.jwtVerify();
  } catch {
    return reply.status(401).send({ message: 'Unauthorized' });
  }
}

const normalizeMemoryToGb = (memory) => (memory >= 256 ? Math.round(memory / 1024) : memory);

const ACTIVE_SERVER_FILTER = {
  status: {
    in: ['RUNNING', 'STOPPED']
  }
};

const SENSITIVE_LEVELS = ['CONFIDENTIAL', 'TOP_SECRET'];

const parseNumericValue = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) ? parsed : null;
};

const includeApplicationRelations = {
  dataCategoryConnections: {
    include: {
      dataCategory: true
    }
  },
  server: true
};

async function createNotification(prisma, userId, content) {
  await prisma.notification.create({
    data: {
      userId,
      content
    }
  });
}

async function userRoutes(fastify) {
  const { prisma } = fastify;

  fastify.addHook('preHandler', authenticate);

  fastify.get('/data-categories', async (_request, reply) => {
    try {
      const categories = await prisma.dataCategory.findMany({
        orderBy: [{ parentId: 'asc' }, { name: 'asc' }]
      });
      return reply.send(categories);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/applications', async (request, reply) => {
    const { userId } = request.user;

    try {
      const applications = await prisma.serverApplication.findMany({
        where: { userId },
        include: includeApplicationRelations,
        orderBy: {
          createdAt: 'desc'
        }
      });

      return reply.send(applications);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.post('/applications', async (request, reply) => {
    const { userId } = request.user;
    const {
      cpu,
      memory,
      gpu,
      storage,
      duration,
      reason,
      dataCategoryIds = []
    } = request.body ?? {};

    const parsedCpu = parseNumericValue(cpu);
    const parsedMemory = parseNumericValue(memory);
    const parsedStorage = parseNumericValue(storage);
    const parsedDuration = parseNumericValue(duration);
    const normalizedCategoryIds = Array.isArray(dataCategoryIds)
      ? [...new Set(dataCategoryIds.map(parseNumericValue).filter(Boolean))]
      : [];
    const trimmedReason = typeof reason === 'string' ? reason.trim() : '';

    if (!parsedCpu || !parsedMemory || !parsedStorage || !parsedDuration) {
      return reply.status(400).send({ message: 'Invalid server specification' });
    }

    if (parsedCpu < 1 || parsedMemory < 1 || parsedStorage < 10 || parsedDuration < 1) {
      return reply.status(400).send({ message: 'Server specification is out of range' });
    }

    try {
      const [currentServers, currentGpuServers, dataCategories] = await Promise.all([
        prisma.server.count({
          where: {
            userId,
            ...ACTIVE_SERVER_FILTER
          }
        }),
        prisma.server.count({
          where: {
            userId,
            ...ACTIVE_SERVER_FILTER,
            application: {
              is: {
                gpu: true
              }
            }
          }
        }),
        prisma.dataCategory.findMany({
          where: {
            id: {
              in: normalizedCategoryIds
            }
          },
          select: {
            id: true,
            name: true,
            secrecyLevel: true
          }
        })
      ]);

      const requiresApproval = dataCategories.some((category) =>
        SENSITIVE_LEVELS.includes(category.secrecyLevel)
      );

      if (requiresApproval && !trimmedReason) {
        return reply.status(400).send({ message: 'Selecting confidential data requires a reason' });
      }

      const shouldAutoApprove =
        !requiresApproval &&
        currentServers < 3 &&
        (!gpu || currentGpuServers < 1);

      const application = await prisma.serverApplication.create({
        data: {
          userId,
          cpu: parsedCpu,
          memory: parsedMemory,
          gpu: Boolean(gpu),
          storage: parsedStorage,
          duration: parsedDuration,
          reason: trimmedReason || null,
          status: shouldAutoApprove ? 'APPROVED' : 'PENDING',
          dataCategoryConnections: {
            create: normalizedCategoryIds.map((dataCategoryId) => ({
              dataCategoryId
            }))
          }
        },
        include: includeApplicationRelations
      });

      if (shouldAutoApprove) {
        const expireAt = new Date();
        expireAt.setDate(expireAt.getDate() + parsedDuration);

        await prisma.server.create({
          data: {
            applicationId: application.id,
            userId,
            expireAt
          }
        });

        await createNotification(
          prisma,
          userId,
          `您的服务器申请 #${application.id} 已自动通过，实例已进入待使用状态。`
        );

        const applicationUser = await prisma.user.findUnique({
          where: { id: userId },
          select: { email: true, nickname: true }
        });

        if (applicationUser) {
          void sendApplicationReviewResult(
            applicationUser,
            {
              id: application.id,
              cpu: application.cpu,
              memoryGb: normalizeMemoryToGb(application.memory),
              storage: application.storage,
              duration: application.duration,
            },
            true,
            applicationUser.email
          ).catch((error) => {
            fastify.log.error(error);
          });
        }
      } else {
        await createNotification(
          prisma,
          userId,
          `您的服务器申请 #${application.id} 已提交，正在等待管理员审批。`
        );
      }

      const savedApplication = await prisma.serverApplication.findUnique({
        where: { id: application.id },
        include: includeApplicationRelations
      });

      return reply.send(savedApplication);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/servers', async (request, reply) => {
    const { userId } = request.user;

    try {
      const servers = await prisma.server.findMany({
        where: { userId },
        include: {
          application: {
            include: {
              dataCategoryConnections: {
                include: { dataCategory: true }
              }
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      return reply.send(servers);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.post('/servers/:id/:action', async (request, reply) => {
    const { userId } = request.user;
    const serverId = parseNumericValue(request.params.id);
    const action = request.params.action;

    if (!serverId) {
      return reply.status(400).send({ message: 'Invalid server id' });
    }

    try {
      const server = await prisma.server.findFirst({
        where: {
          id: serverId,
          userId
        },
        include: {
          application: true
        }
      });

      if (!server) {
        return reply.status(404).send({ message: 'Server not found' });
      }

      let nextStatus = null;
      let actionLabel = '';

      if (action === 'shutdown') {
        if (server.status !== 'RUNNING') {
          return reply.status(400).send({ message: 'Only running servers can be stopped' });
        }
        nextStatus = 'STOPPED';
        actionLabel = '已关机';
      } else if (action === 'restart' || action === 'start') {
        if (server.status !== 'STOPPED') {
          return reply.status(400).send({ message: 'Only stopped servers can be started' });
        }
        nextStatus = 'RUNNING';
        actionLabel = '已启动';
      } else if (action === 'release') {
        if (server.status === 'DELETED') {
          return reply.status(400).send({ message: 'Server has already been released' });
        }
        nextStatus = 'DELETED';
        actionLabel = '已释放';
      } else {
        return reply.status(400).send({ message: 'Invalid action' });
      }

      const updatedServer = await prisma.server.update({
        where: { id: serverId },
        data: { status: nextStatus },
        include: {
          application: {
            include: {
              dataCategoryConnections: {
                include: { dataCategory: true }
              }
            }
          }
        }
      });

      const serverName = updatedServer.pveName || `服务器 #${updatedServer.id}`;
      await createNotification(prisma, userId, `您的服务器「${serverName}」${actionLabel}。`);

      return reply.send(updatedServer);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/notifications', async (request, reply) => {
    const { userId } = request.user;
    try {
      const notifications = await prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
      });
      return reply.send(notifications);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.put('/notifications/:id/read', async (request, reply) => {
    const { userId } = request.user;
    const notificationId = parseNumericValue(request.params.id);

    if (!notificationId) {
      return reply.status(400).send({ message: 'Invalid notification id' });
    }

    try {
      await prisma.notification.updateMany({
        where: { id: notificationId, userId },
        data: { isRead: true }
      });
      return reply.send({ message: 'Notification marked as read' });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.put('/notifications/read-all', async (request, reply) => {
    const { userId } = request.user;
    try {
      await prisma.notification.updateMany({
        where: { userId, isRead: false },
        data: { isRead: true }
      });
      return reply.send({ message: 'All notifications marked as read' });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/servers/host/:hostName', async (request, reply) => {
    const { hostName } = request.params;
    try {
      const servers = await prisma.server.findMany({
        where: {
          pveNode: hostName,
          status: {
            in: ['RUNNING', 'STOPPED']
          }
        },
        include: {
          user: {
            select: { id: true, email: true, nickname: true }
          },
          application: {
            select: { cpu: true, memory: true, storage: true, gpu: true }
          }
        }
      });
      return reply.send(servers);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.post('/servers/:id/extend', async (request, reply) => {
    const { userId } = request.user;
    const serverId = parseNumericValue(request.params.id);
    const extensionDays = parseNumericValue(request.body?.extensionDays);

    if (!serverId) {
      return reply.status(400).send({ message: 'Invalid server id' });
    }

    if (!extensionDays || extensionDays < 1 || extensionDays > 30) {
      return reply.status(400).send({ message: 'Extension days must be between 1 and 30' });
    }

    try {
      const server = await prisma.server.findFirst({
        where: {
          id: serverId,
          userId
        },
        include: {
          application: true
        }
      });

      if (!server) {
        return reply.status(404).send({ message: 'Server not found' });
      }

      if (server.status === 'DELETED') {
        return reply.status(400).send({ message: 'Released servers cannot be extended' });
      }

      await prisma.serverApplication.update({
        where: { id: server.applicationId },
        data: {
          extensionDays: (server.application?.extensionDays ?? 0) + extensionDays
        }
      });

      const newExpireAt = new Date(server.expireAt);
      newExpireAt.setDate(newExpireAt.getDate() + extensionDays);

      const updatedServer = await prisma.server.update({
        where: { id: serverId },
        data: { expireAt: newExpireAt },
        include: {
          application: {
            include: {
              dataCategoryConnections: {
                include: { dataCategory: true }
              }
            }
          }
        }
      });

      const serverName = updatedServer.pveName || `服务器 #${updatedServer.id}`;
      await createNotification(prisma, userId, `您的服务器「${serverName}」已成功续期 ${extensionDays} 天。`);

      return reply.send(updatedServer);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });
}

export default userRoutes;
