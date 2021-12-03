import { ContactController } from '../controllers';
import express from 'express';

/* eslint-disable require-jsdoc */
export class ContactsRoutes {
  public contactController: ContactController = new ContactController();

  public initialize(app: express.Application): void {
    app
      .route('/contact')
      .get(this.contactController.getAll)
      .post(this.contactController.add);

    app
      .route('/contact/:contactId')
      .get(this.contactController.getByID)
      .put(this.contactController.update)
      .delete(this.contactController.delete);
  }
}
