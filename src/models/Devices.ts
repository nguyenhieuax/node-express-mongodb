import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DevicesSchema = new Schema({
  deviceId: {
    type: String,
  },
  appId: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
