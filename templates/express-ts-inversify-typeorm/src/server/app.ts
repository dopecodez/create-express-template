import express from 'express';
import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { SERVER, BASEROUTE } from '../const/types';
const swaggerJSDoc = require('swagger-jsdoc');
import swaggerUiExpress = require('swagger-ui-express');
import { ServerInterface } from './app.interface';
import { IRouter } from '../modules/router.interface';
import { connectToDatabase } from '../config/db';

@provide(SERVER)
class Server implements ServerInterface {
  @inject(BASEROUTE) private baseRouter!: IRouter

  constructor(){
    connectToDatabase()
  }

  private swaggerDefinition = {
    info: {
      title: `REST API for App`,
      version: 1,
      description: `This is the REST API for App`,
    },
    host: `localhost:${process.env.PORT}`,
    basePath: '/api/v1',
  };

  private options = {
    swaggerDefinition: this.swaggerDefinition,
    apis: ['./src/modules/**/docs/*.yaml'],
  };
  async server(): Promise<express.Application> {
    const app = express();
    const swaggerSpec = swaggerJSDoc(this.options);
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use('/api/v1', this.baseRouter.routes);//setting up base route
    app.use(cors());
    app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));
    return app;
  }
}