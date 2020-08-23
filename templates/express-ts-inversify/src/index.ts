import { Environment } from './config/environment';
/**
 * Setuping environment variables
 */
Environment.setup();
import 'reflect-metadata';

import { Application } from 'express';
import { Container } from 'inversify';

import { SERVER } from './const/types';
import { receptacle } from './container';
import { ServerInterface } from './server/app.interface';
import { config } from './config/config';

async function startServer() {
    const container: Container = receptacle.getContainer;
    const server: ServerInterface = container.get(SERVER);
    const app: Application = await server.server();
    app.listen(config.SERVER_PORT, () =>
        console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`)
    );
}

startServer();

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});