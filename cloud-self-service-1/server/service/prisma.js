import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client';
import config from '../config.js';

const adapter = new PrismaMariaDb({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma }