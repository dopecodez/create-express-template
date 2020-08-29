import 'reflect-metadata';
import express from 'express';
import { inject } from 'inversify';
import { provide } from 'inversify-binding-decorators';
import cors from 'cors';
import { SERVER, BASEROUTE } from '../const/types';
import { ServerInterface } from './app.interface';
import { IRouter } from '../modules/router.interface';
import { connectToDatabase } from '../config/db';

@provide(SERVER)
class Server implements ServerInterface {// eslint-disable-line
  @inject(BASEROUTE) private baseRouter!: IRouter

  constructor() {
    connectToDatabase()
  }

  async server(): Promise<express.Application> {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/api/v1', this.baseRouter.routes);//setting up base route
    // define a route handler for the default home page
    app.get("/", (req, res) => {
      res.send("Welcome to express-create application! ");
    });
    app.use(cors());
    return app;
  }
}