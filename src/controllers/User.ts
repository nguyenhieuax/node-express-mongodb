/* eslint-disable require-jsdoc */
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { UserSchema } from '../models';

const User = mongoose.model('User', UserSchema);
export class UserController {
  public add(req: Request, res: Response): void {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public getAll(req: Request, res: Response): void {
    User.find({}, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public getByID(req: Request, res: Response): void {
    User.findById(req.params.userId, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public update(req: Request, res: Response): void {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      { new: true },
      (err, user) => {
        if (err) {
          res.send(err);
        }
        res.json(user);
      }
    );
  }

  public delete(req: Request, res: Response): void {
    User.remove({ _id: req.params.userId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted user!' });
    });
  }
}
