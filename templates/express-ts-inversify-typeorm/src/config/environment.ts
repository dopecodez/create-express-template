import * as dotenv from 'dotenv';

export class Environment {
    static setup() {
        dotenv.config();
    }
}