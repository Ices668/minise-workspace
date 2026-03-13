import { prisma } from './prisma.js';
import logger from '../logger.js';
import { sendExpiryWarning } from './email-service.js';

// Warn users when their servers expire in 7, 3, or 1 day(s)
const WARNING_DAYS = [7, 3, 1];

async function checkAndNotifyExpiringServers() {
    logger.info('Running server expiry check...');

    try {
        const now = new Date();

        for (const daysLeft of WARNING_DAYS) {
            // Find servers expiring in exactly [daysLeft] days (within a 1-hour window)
            const windowStart = new Date(now.getTime() + (daysLeft - 1) * 24 * 60 * 60 * 1000);
            const windowEnd = new Date(now.getTime() + daysLeft * 24 * 60 * 60 * 1000);

            const expiringServers = await prisma.server.findMany({
                where: {
                    status: { in: ['RUNNING', 'STOPPED'] },
                    expireAt: {
                        gte: windowStart,
                        lte: windowEnd
                    }
                },
                include: {
                    user: true
                }
            });

            for (const server of expiringServers) {
                try {
                    const serverName = server.pveName || `服务器 #${server.id}`;

                    // Create in-app notification
                    await prisma.notification.create({
                        data: {
                            userId: server.userId,
                            content: `您的服务器「${serverName}」将在 ${daysLeft} 天后到期，请及时续期。`
                        }
                    });

                    // Send email
                    await sendExpiryWarning(
                        server.user.email,
                        {
                            id: server.id,
                            name: serverName,
                            daysLeft,
                            expireAt: server.expireAt
                        },
                        server.user.email
                    );

                    logger.info(`Expiry warning sent for server ${server.id} (${daysLeft} days left)`);
                } catch (err) {
                    logger.error(`Failed to notify user for server ${server.id}: ${err.message}`);
                }
            }
        }

        logger.info('Server expiry check completed.');
    } catch (error) {
        logger.error(`Server expiry check failed: ${error.message}`);
    }
}

// Run every 6 hours (in ms)
const INTERVAL_MS = 6 * 60 * 60 * 1000;

function startExpiryService() {
    // Run once on startup, then on interval
    checkAndNotifyExpiringServers();
    setInterval(checkAndNotifyExpiringServers, INTERVAL_MS);
    logger.info(`Expiry service started (interval: every ${INTERVAL_MS / 3600000}h)`);
}

export { startExpiryService, checkAndNotifyExpiringServers };
