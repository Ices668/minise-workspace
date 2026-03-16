import bcrypt from 'bcryptjs';
import { prisma } from '../server/service/prisma.js';

const SMOKE_PASSWORD = 'SmokeTest123!';
const SMOKE_USERS = [
    {
        email: 'smoke-admin@example.com',
        nickname: 'smoke-admin',
        role: 'ADMIN',
    },
    {
        email: 'smoke-user@example.com',
        nickname: 'smoke-user',
        role: 'USER',
    },
];

const SMOKE_CATEGORIES = [
    {
        name: 'Smoke Public Data',
        description: '/smoke/public',
        secrecyLevel: 'PUBLIC',
    },
    {
        name: 'Smoke Confidential Data',
        description: '/smoke/confidential',
        secrecyLevel: 'CONFIDENTIAL',
    },
];

const command = (process.argv[2] || 'seed').toLowerCase();

const log = (message) => {
    console.log(`[smoke-data] ${message}`);
};

async function cleanSmokeData() {
    const smokeUsers = await prisma.user.findMany({
        where: {
            email: {
                in: SMOKE_USERS.map((user) => user.email),
            },
        },
        select: {
            id: true,
            email: true,
        },
    });

    const smokeCategories = await prisma.dataCategory.findMany({
        where: {
            name: {
                in: SMOKE_CATEGORIES.map((category) => category.name),
            },
        },
        select: {
            id: true,
            name: true,
        },
    });

    const userIds = smokeUsers.map((user) => user.id);
    const categoryIds = smokeCategories.map((category) => category.id);

    const smokeApplications = userIds.length > 0
        ? await prisma.serverApplication.findMany({
            where: {
                userId: {
                    in: userIds,
                },
            },
            select: {
                id: true,
            },
        })
        : [];

    const applicationIds = smokeApplications.map((application) => application.id);

    await prisma.$transaction(async (tx) => {
        if (userIds.length > 0) {
            await tx.notification.deleteMany({
                where: {
                    userId: {
                        in: userIds,
                    },
                },
            });
        }

        if (applicationIds.length > 0) {
            await tx.serverApplicationDataCategory.deleteMany({
                where: {
                    serverApplicationId: {
                        in: applicationIds,
                    },
                },
            });
        }

        if (categoryIds.length > 0) {
            await tx.serverApplicationDataCategory.deleteMany({
                where: {
                    dataCategoryId: {
                        in: categoryIds,
                    },
                },
            });
        }

        if (userIds.length > 0) {
            await tx.server.deleteMany({
                where: {
                    userId: {
                        in: userIds,
                    },
                },
            });

            await tx.serverApplication.deleteMany({
                where: {
                    userId: {
                        in: userIds,
                    },
                },
            });
        }

        if (categoryIds.length > 0) {
            await tx.dataCategory.deleteMany({
                where: {
                    id: {
                        in: categoryIds,
                    },
                },
            });
        }

        if (userIds.length > 0) {
            await tx.user.deleteMany({
                where: {
                    id: {
                        in: userIds,
                    },
                },
            });
        }
    });

    log(`cleaned ${smokeUsers.length} users, ${smokeCategories.length} categories, ${applicationIds.length} applications`);
}

async function seedSmokeData() {
    const passwordHash = await bcrypt.hash(SMOKE_PASSWORD, 10);

    await prisma.$transaction(async (tx) => {
        for (const smokeUser of SMOKE_USERS) {
            const existing = await tx.user.findUnique({
                where: {
                    email: smokeUser.email,
                },
                select: {
                    id: true,
                },
            });

            if (existing) {
                await tx.user.update({
                    where: {
                        id: existing.id,
                    },
                    data: {
                        nickname: smokeUser.nickname,
                        password: passwordHash,
                        role: smokeUser.role,
                        needResetPassword: 0,
                    },
                });
            } else {
                await tx.user.create({
                    data: {
                        email: smokeUser.email,
                        nickname: smokeUser.nickname,
                        password: passwordHash,
                        role: smokeUser.role,
                        needResetPassword: 0,
                    },
                });
            }
        }

        for (const smokeCategory of SMOKE_CATEGORIES) {
            const existing = await tx.dataCategory.findFirst({
                where: {
                    name: smokeCategory.name,
                },
                select: {
                    id: true,
                },
            });

            if (existing) {
                await tx.dataCategory.update({
                    where: {
                        id: existing.id,
                    },
                    data: {
                        description: smokeCategory.description,
                        parentId: null,
                        secrecyLevel: smokeCategory.secrecyLevel,
                    },
                });
            } else {
                await tx.dataCategory.create({
                    data: {
                        name: smokeCategory.name,
                        description: smokeCategory.description,
                        parentId: null,
                        secrecyLevel: smokeCategory.secrecyLevel,
                    },
                });
            }
        }
    });

    log(`seeded ${SMOKE_USERS.length} users and ${SMOKE_CATEGORIES.length} categories`);
    log(`default smoke password: ${SMOKE_PASSWORD}`);
}

async function main() {
    if (!['seed', 'clean', 'reset'].includes(command)) {
        console.error('Usage: npm run smoke-data -- <seed|clean|reset>');
        process.exitCode = 1;
        return;
    }

    if (command === 'clean') {
        await cleanSmokeData();
        return;
    }

    if (command === 'reset') {
        await cleanSmokeData();
        await seedSmokeData();
        return;
    }

    await seedSmokeData();
}

try {
    await main();
} finally {
    await prisma.$disconnect();
}
