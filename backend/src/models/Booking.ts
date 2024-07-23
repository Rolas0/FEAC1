import mongoose, { Document, Types } from 'mongoose';
import { isEmail } from 'validator';

export interface IBooking extends Document {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  businessId: Types.ObjectId;
  date: Date;
  time: string;
  userEmail: string;
  userName: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

const bookingSchema = new mongoose.Schema<IBooking>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },

  userEmail: {
    type: String,
    required: true,
    validate: [isEmail, 'Please enter a valid email'],
  },

  userName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: [true, 'Booking status is required.'],
    enum: {
      values: ['confirmed', 'pending', 'cancelled'],
      message: '{VALUE} is not supported',
    },
  },
});

const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;
