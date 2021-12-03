/* eslint-disable require-jsdoc */
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { DevicesSchema } from '../models';

const Devices = mongoose.model('DevicesSchema', DevicesSchema);

export class DevicesController {
  public add(req: Request, res: Response): void {
    const newDevice = new Devices(req.body);
    newDevice.save((err, device) => {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public getAll(req: Request, res: Response): void {
    Devices.find({}, (err, device) => {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public getByID(req: Request, res: Response): void {
    Devices.findById(req.params.deviceId, (err: any, device: any) => {
      if (err) {
        res.send(err);
      }
      res.json(device);
    });
  }

  public update(req: Request, res: Response): void {
    Devices.findOneAndUpdate(
      { _id: req.params.deviceId },
      req.body,
      { new: true },
      (err, device) => {
        if (err) {
          res.send(err);
        }
        res.json(device);
      }
    );
  }

  public delete(req: Request, res: Response): void {
    Devices.remove({ _id: req.params.deviceId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted device!' });
    });
  }
}
