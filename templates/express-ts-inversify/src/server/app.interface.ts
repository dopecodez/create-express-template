import { Application } from 'express';

export interface ServerInterface {
    server(): Promise<Application>;
}
