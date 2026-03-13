import bcrypt from 'bcryptjs';
import { randomBytes } from 'node:crypto';
import { sendApplicationReviewResult, sendInitialPasswordEmail } from '../../service/email-service.js';

async function authenticate(request, reply) {
  try {
    await request.jwtVerify();
  } catch {
    return reply.status(401).send({ message: 'Unauthorized' });
  }
}

async function adminOnly(request, reply) {
  if (request.user.role !== 'ADMIN') {
    return reply.status(403).send({ message: 'Forbidden' });
  }
}

const parseNumericValue = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isInteger(parsed) ? parsed : null;
};

async function createNotification(prisma, userId, content) {
  await prisma.notification.create({
    data: {
      userId,
      content
    }
  });
}

const normalizeMemoryToGb = (memory) => (memory >= 256 ? Math.round(memory / 1024) : memory);

const createInitialPassword = () => `Init-${randomBytes(6).toString('base64url')}`;

async function adminRoutes(fastify) {
  const { prisma } = fastify;

  fastify.addHook('preHandler', authenticate);
  fastify.addHook('preHandler', adminOnly);

  fastify.get('/applications', async (_request, reply) => {
    try {
      const applications = await prisma.serverApplication.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nickname: true,
              role: true
            }
          },
          dataCategoryConnections: {
            include: {
              dataCategory: true
            }
          },
          server: true
        },
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

  fastify.post('/applications/:id/approve', async (request, reply) => {
    const applicationId = parseNumericValue(request.params.id);
    const { approved, reason } = request.body ?? {};
    const rejectionReason = typeof reason === 'string' ? reason.trim() : '';

    if (!applicationId) {
      return reply.status(400).send({ message: 'Invalid application id' });
    }

    if (typeof approved !== 'boolean') {
      return reply.status(400).send({ message: 'approved must be a boolean' });
    }

    try {
      const application = await prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nickname: true
            }
          },
          server: true
        }
      });

      if (!application) {
        return reply.status(404).send({ message: 'Application not found' });
      }

      if (application.status !== 'PENDING') {
        return reply.status(400).send({ message: 'Only pending applications can be processed' });
      }

      if (approved) {
        await prisma.serverApplication.update({
          where: { id: applicationId },
          data: { status: 'APPROVED' }
        });

        if (!application.server) {
          const expireAt = new Date();
          expireAt.setDate(expireAt.getDate() + application.duration);

          await prisma.server.create({
            data: {
              applicationId: application.id,
              userId: application.userId,
              expireAt
            }
          });
        }

        await createNotification(
          prisma,
          application.userId,
          `您的服务器申请 #${application.id} 已通过管理员审批。`
        );

        void sendApplicationReviewResult(
          application.user,
          {
            id: application.id,
            cpu: application.cpu,
            memoryGb: normalizeMemoryToGb(application.memory),
            storage: application.storage,
            duration: application.duration,
          },
          true,
          application.user.email
        ).catch((error) => {
          fastify.log.error(error);
        });
      } else {
        await prisma.serverApplication.update({
          where: { id: applicationId },
          data: { status: 'REJECTED' }
        });

        await createNotification(
          prisma,
          application.userId,
          rejectionReason
            ? `您的服务器申请 #${application.id} 已被拒绝。原因：${rejectionReason}`
            : `您的服务器申请 #${application.id} 已被拒绝。`
        );

        void sendApplicationReviewResult(
          application.user,
          {
            id: application.id,
            cpu: application.cpu,
            memoryGb: normalizeMemoryToGb(application.memory),
            storage: application.storage,
            duration: application.duration,
            reason: rejectionReason,
          },
          false,
          application.user.email
        ).catch((error) => {
          fastify.log.error(error);
        });
      }

      const updatedApplication = await prisma.serverApplication.findUnique({
        where: { id: applicationId },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nickname: true,
              role: true
            }
          },
          dataCategoryConnections: {
            include: {
              dataCategory: true
            }
          },
          server: true
        }
      });

      return reply.send(updatedApplication);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.post('/users', async (request, reply) => {
    const { email, nickname, role } = request.body ?? {};
    const normalizedRole = typeof role === 'string' ? role.toUpperCase() : null;

    if (!email || !normalizedRole) {
      return reply.status(400).send({ message: 'email and role are required' });
    }

    if (!['USER', 'ADMIN'].includes(normalizedRole)) {
      return reply.status(400).send({ message: 'Invalid role' });
    }

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        return reply.status(400).send({ message: 'User already exists' });
      }

      const initialPassword = createInitialPassword();
      const hashedPassword = await bcrypt.hash(initialPassword, 10);

      const user = await prisma.user.create({
        data: {
          email,
          nickname: nickname || email.split('@')[0],
          password: hashedPassword,
          role: normalizedRole,
          needResetPassword: 1
        },
        select: { id: true, email: true, nickname: true, role: true, createdAt: true }
      });

      const emailSent = await sendInitialPasswordEmail(
        {
          email: user.email,
          nickname: user.nickname || user.email.split('@')[0],
          role: user.role
        },
        initialPassword,
        user.email
      );

      return reply.send({
        ...user,
        emailSent,
        fallbackInitialPassword: emailSent ? null : initialPassword
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

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

  fastify.post('/data-categories', async (request, reply) => {
    const { name, description, parentId, secrecyLevel } = request.body ?? {};

    if (!name || !secrecyLevel) {
      return reply.status(400).send({ message: 'name and secrecyLevel are required' });
    }

    try {
      const category = await prisma.dataCategory.create({
        data: {
          name,
          description,
          parentId: parseNumericValue(parentId),
          secrecyLevel
        }
      });

      return reply.send(category);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.put('/data-categories/:id', async (request, reply) => {
    const categoryId = parseNumericValue(request.params.id);
    const { name, description, parentId, secrecyLevel } = request.body ?? {};

    if (!categoryId) {
      return reply.status(400).send({ message: 'Invalid category id' });
    }

    try {
      const category = await prisma.dataCategory.update({
        where: { id: categoryId },
        data: {
          name,
          description,
          parentId: parseNumericValue(parentId),
          secrecyLevel
        }
      });

      return reply.send(category);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.delete('/data-categories/:id', async (request, reply) => {
    const categoryId = parseNumericValue(request.params.id);

    if (!categoryId) {
      return reply.status(400).send({ message: 'Invalid category id' });
    }

    try {
      const childrenCount = await prisma.dataCategory.count({
        where: { parentId: categoryId }
      });

      if (childrenCount > 0) {
        return reply.status(400).send({ message: 'Cannot delete category with children' });
      }

      const applicationCount = await prisma.serverApplicationDataCategory.count({
        where: {
          dataCategoryId: categoryId
        }
      });

      if (applicationCount > 0) {
        return reply.status(400).send({ message: 'Cannot delete category used by applications' });
      }

      await prisma.dataCategory.delete({
        where: { id: categoryId }
      });

      return reply.send({ message: 'Category deleted successfully' });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/servers/host/:hostName', async (request, reply) => {
    const { hostName } = request.params;
    try {
      const servers = await prisma.server.findMany({
        where: { pveNode: hostName },
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

  fastify.put('/users/:id', async (request, reply) => {
    const userId = parseNumericValue(request.params.id);
    const role = typeof request.body?.role === 'string' ? request.body.role.toUpperCase() : null;

    if (!userId || !role) {
      return reply.status(400).send({ message: 'Invalid user id or role' });
    }

    if (!['USER', 'ADMIN'].includes(role)) {
      return reply.status(400).send({ message: 'Invalid role' });
    }

    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: { role },
        select: { id: true, email: true, role: true, createdAt: true, updatedAt: true }
      });
      return reply.send(user);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  fastify.get('/users', async (_request, reply) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          nickname: true,
          role: true,
          createdAt: true,
          updatedAt: true
        }
      });

      return reply.send(users);
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });
}

export default adminRoutes;
