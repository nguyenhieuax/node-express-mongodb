/* eslint-disable require-jsdoc */
import { Routes } from './routes';
import bodyParser from 'body-parser';
import database from './db';
import express from 'express';

class App {
  public app: express.Application;
  public routes: Routes = new Routes();

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.routes.initialize(this.app);
    database.connect();
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
