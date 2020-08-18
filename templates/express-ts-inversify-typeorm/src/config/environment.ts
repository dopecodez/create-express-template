import * as dotenv from 'dotenv';

export class Environment {
    static setup() {
        const home = process.env.HOME || process.env.HOMEPATH
        dotenv.config();
    }
}