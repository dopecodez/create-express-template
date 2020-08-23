import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
    SERVER_PORT: string;
    NODE_ENV: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_PORT: number;
    TYPEORM_CONNECTION: any;
    JWT_SECRET: string;
    JWT_EXPIRES: number;
    JWT_REFRESH_SECRET?: string
    JWT_REFRESH_EXPIRES: number;
    TYPEORM_DEBUG_MODE: any;
    CLIENT_ID: string;
}

export const config: ConfigInterface = {
    SERVER_PORT: process.env.PORT || '',
    NODE_ENV: process.env.NODE_ENV || '',
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || '',
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || '',
    DB_PORT: process.env.DB_PORT
        ? Number(process.env.DB_PORT)
        : 3306,
    TYPEORM_CONNECTION: 'mysql',
    JWT_SECRET: process.env.JWT_SECRET || 'topsecret122',
    JWT_EXPIRES: Number(process.env.JWT_EXPIRES),
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES: Number(process.env.JWT_REFRESH_EXPIRES),
    TYPEORM_DEBUG_MODE: process.env.TYPEORM_DEBUG_MODE ? JSON.parse(process.env.TYPEORM_DEBUG_MODE) : false,
    CLIENT_ID: process.env.CLIENT_ID || ''
};

