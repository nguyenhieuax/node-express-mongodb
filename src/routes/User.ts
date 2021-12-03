/* eslint-disable require-jsdoc */
import { UserController } from '../controllers';
import express from 'express';

export class UserRoutes {
  public userController: UserController = new UserController();
  public initialize(app: express.Application): void {
    app
      .route('/user')
      .get(this.userController.getAll)
      .post(this.userController.add);

    app
      .route('/user/:userId')
      .get(this.userController.getByID)
      .put(this.userController.update)
      .delete(this.userController.delete);
  }
}
