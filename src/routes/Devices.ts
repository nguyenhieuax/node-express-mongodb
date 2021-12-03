import { DevicesController } from '../controllers';
import express from 'express';

/* eslint-disable require-jsdoc */
export class DevicesRoutes {
  public contactController: DevicesController = new DevicesController();

  public initialize(app: express.Application): void {
    app
      .route('/device')
      .get(this.contactController.getAll)
      .post(this.contactController.add);

    app
      .route('/device/:id')
      .get(this.contactController.getByID)
      .put(this.contactController.update)
      .delete(this.contactController.delete);
  }
}
