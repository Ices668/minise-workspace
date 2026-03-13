import bcrypt from 'bcryptjs';

async function authRoutes(fastify) {
  const { prisma } = fastify;

  // 用户登录
  fastify.post('/login', async (request, reply) => {
    const { email, password } = request.body;

    try {
      // 查找用户
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return reply.status(401).send({ message: 'Invalid email or password' });
      }

      // 验证密码
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return reply.status(401).send({ message: 'Invalid email or password' });
      }

      // 生成JWT令牌
      const token = fastify.jwt.sign({
        userId: user.id,
        email: user.email,
        role: user.role
      });

      return reply.send({
        token,
        user: {
          id: user.id,
          email: user.email,
          nickname: user.nickname || null,
          role: user.role,
          needResetPassword: user.needResetPassword === 1
        }
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });

  // 重置密码
  fastify.post('/reset-password', async (request, reply) => {
    const { email, oldPassword, newPassword } = request.body;

    try {
      // 查找用户
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return reply.status(404).send({ message: 'User not found' });
      }

      // 验证旧密码
      const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isPasswordValid) {
        return reply.status(401).send({ message: 'Invalid old password' });
      }

      // 哈希新密码
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // 更新密码并清除首次登录标志
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword, needResetPassword: 0 }
      });

      return reply.send({ message: 'Password reset successfully' });
    } catch (error) {
      fastify.log.error(error);
      return reply.status(500).send({ message: 'Internal server error' });
    }
  });
}

export default authRoutes;
