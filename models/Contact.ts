import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  type: string;
  date: Date;
}

const ContactSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  type: {
    type: String,
    default: 'personal'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IContact>('contact', ContactSchema);
