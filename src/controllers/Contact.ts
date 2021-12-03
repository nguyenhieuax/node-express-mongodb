/* eslint-disable require-jsdoc */
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { ContactSchema } from '../models';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  public add(req: Request, res: Response): void {
    const newContact = new Contact(req.body);
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getAll(req: Request, res: Response): void {
    Contact.find({}, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getByID(req: Request, res: Response): void {
    Contact.findById(req.params.contactId, (err: any, contact: any) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public update(req: Request, res: Response): void {
    Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.json(contact);
      }
    );
  }

  public delete(req: Request, res: Response): void {
    Contact.remove({ _id: req.params.contactId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted contact!' });
    });
  }
}
