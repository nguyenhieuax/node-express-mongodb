/* eslint-disable require-jsdoc */
import express, { Request, Response } from 'express';
import { DevicesRoutes } from './Devices';

export class Routes {
  public devicesRoutes: DevicesRoutes = new DevicesRoutes();

  public initialize(app: express.Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'NodeJS Express MongoDB Typescript Template API Working',
      });
    });

    // list routes
    this.devicesRoutes.initialize(app);

    app.route('*').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Invalid Route / Route Does not exist',
      });
    });
  }
}
