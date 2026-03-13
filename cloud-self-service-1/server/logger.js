import winston from 'winston';

const format = winston.format.combine(winston.format.timestamp(), winston.format.json());

const logger = winston.createLogger({
  level: 'info',
  format,
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({ format })
  ]
});

export default logger;
