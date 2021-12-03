/* eslint-disable require-jsdoc */
import express, { Request, Response } from 'express';
import { ContactsRoutes } from './Contact';
import { UserRoutes } from './User';

export class Routes {
  public contactsRoutes: ContactsRoutes = new ContactsRoutes();
  public userRoutes: UserRoutes = new UserRoutes();

  public initialize(app: express.Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'NodeJS Express MongoDB Typescript Template API Working',
      });
    });

    this.contactsRoutes.initialize(app);
    this.userRoutes.initialize(app);

    app.route('*').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Invalid Route / Route Does not exist',
      });
    });
  }
}
