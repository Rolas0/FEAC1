import { IBooking } from '../models/Booking';
import User from '../models/User';

import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getUserBookings = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status } = req.query;

  try {
    const user = await User.findById(userId).populate<{ bookings: IBooking[] }>({
      path: 'bookings',
      match: { status: status },
      populate: { path: 'businessId' },
    });

    if (!user) {
      console.log('User not found');
      return res.status(404).send('User not found');
    }

    const bookings = user.bookings;

    if (!bookings || bookings.length === 0) {
      console.log('Bookings not found');
      return res.status(404).send('Bookings not found');
    }

    res.status(200).json(bookings);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    return res.json(updatedUser);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    return res.json(deletedUser);
  } catch (err) {
    return res.status(404).json(err);
  }
};
