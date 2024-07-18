import Booking from '../models/Booking';
import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';

export const getBookingsByEmail = async (req: Request, res: Response) => {
  const emailBookings = req.params.userEmail;
  try {
    const filteredBookings = await Booking.find({
      userEmail: emailBookings.toLowerCase(),
    });
    return res.status(200).send(filteredBookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings for the user', error: err });
  }
};

// export const postBooking = async (req: Request, res: Response) => {
//   const post = req.body;
//   const newBooking = new Booking(post);

//   try {
//     await newBooking.save();
//     return res.status(201).json(newBooking);
//   } catch (err) {
//     res.status(400).json({
//       message: 'Error creating booking',
//       error: (err as Error)?.message ?? err,
//     });
//   }
// };
export const postBooking = async (req: Request, res: Response) => {
  const { businessId, date, time, userEmail, userName, status } = req.body;

  if (!businessId || !date || !time || !userEmail || !userName || !status) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email: userEmail }).session(session);

    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: 'User not found' });
    }

    const newBooking = new Booking({
      businessId,
      date,
      time,
      userEmail,
      userName,
      status,
    });

    const savedBooking = await newBooking.save({ session });

    user.bookings.push(savedBooking._id);
    await user.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json(savedBooking);
  } catch (err) {
    return res.status(500).json({
      message: 'Error creating booking',
      error: (err as Error)?.message ?? err,
    });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const bookingDelete = await Booking.findByIdAndDelete(id);
    return res.status(200).send(bookingDelete);
  } catch (err) {
    res.status(500).json({ message: 'Error deleting bookings for the user', error: err });
  }
};

export const getBookingByDate = async (req: Request, res: Response) => {
  const { businessId, date } = req.params;
  try {
    const getByDate = await Booking.find({
      businessId: businessId,
      date: new Date(date),
    });
    res.status(200).send(getByDate);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching bookings for the specified date and business',
      error: err,
    });
  }
};
