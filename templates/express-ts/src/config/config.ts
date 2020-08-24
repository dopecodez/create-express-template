import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface {
    SERVER_PORT: string;
    NODE_ENV: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DB_PORT: number;
    TYPEORM_CONNECTION: any;
    TYPEORM_DEBUG_MODE: any;
}

export const config: ConfigInterface = {
    SERVER_PORT: process.env.PORT || '',
    NODE_ENV: process.env.NODE_ENV || '',
    DB_HOST: process.env.DB_HOST || '',
    DB_USERNAME: process.env.DB_USERNAME || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || '',
    DB_PORT: process.env.DB_PORT
        ? Number(process.env.DB_PORT)
        : 3306,
    TYPEORM_CONNECTION: 'mysql',
    TYPEORM_DEBUG_MODE: process.env.TYPEORM_DEBUG_MODE ? JSON.parse(process.env.TYPEORM_DEBUG_MODE) : false
};

