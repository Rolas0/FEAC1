const mongoose = require('mongoose');
const { isEmail } = require('validator');

const bookingSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
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

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
