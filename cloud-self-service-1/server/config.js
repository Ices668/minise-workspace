import dotenv from 'dotenv';
dotenv.config();

const readEnvValue = (key, defaultValue) => {
    const e = process.env;
    const value = e[key];

    if (value === null && defaultValue === undefined) {
        throw new Error(`Environment variable ${key} is missing`);
    }

    if (!value) {
        return defaultValue;
    }

    return value;
};

const readIntegerEnvValue = (key, defaultValue) => {
    let value = readEnvValue(key, defaultValue);
    if (value) {
        value = parseInt(value, 10);
        if (!Number.isNaN(value)) {
            return value;
        }
    }
    if (value === defaultValue && defaultValue !== undefined) {
        return value;
    }
    throw new Error(`Environment variable ${key} is not an integer`);
};

const readBoolEnvValue = (key, defaultValue) => {
    const value = readEnvValue(key, defaultValue);
    return !!(value === 'true' || value === true);
};

export default {
    port: readIntegerEnvValue('PORT', 3001),
    api: {
        baseUrl: readEnvValue('API_PORTAL_URL'),
        token: readEnvValue('API_PORTAL_TOKEN'),
    },
    database: {
        host: readEnvValue('DATABASE_HOST'),
        user: readEnvValue('DATABASE_USER'),
        password: readEnvValue('DATABASE_PASSWORD'),
        database: readEnvValue('DATABASE_NAME')
    },
    smtp: {
        host: readEnvValue('SMTP_HOST'),
        port: readIntegerEnvValue('SMTP_PORT', 465),
        secure: readBoolEnvValue('SMTP_SECURE', false),
        auth: {
            user: readEnvValue('SMTP_USER'),
            pass: readEnvValue('SMTP_PASSWORD')
        }
    },
    pve: {
        enabled: readBoolEnvValue('PVE_ENABLED', false),
        host: readEnvValue('PVE_HOST', ''),
        port: readIntegerEnvValue('PVE_PORT', 8006),
        username: readEnvValue('PVE_USERNAME', ''),
        password: readEnvValue('PVE_PASSWORD', ''),
        realm: readEnvValue('PVE_REALM', 'pam')
    }
}
