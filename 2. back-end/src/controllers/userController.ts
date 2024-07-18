import User from '../models/User';
import Booking from '../models/Booking';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// export const getUserBookings = async (req: Request, res: Response) => {
//   const { userEmail } = req.params;

//   try {
//     const user = await User.findOne({ userEmail }).populate('bookings').exec();
//     console.log(user);
//     if (!user) {
//       return res.status(404).send('User not found');
//     }

//     const bookings = user.bookings;

//     if (!bookings || bookings.length === 0) {
//       return res.status(404).send('Bookings not found');
//     }

//     res.status(200).send(bookings);
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching businesses by category',
//       error: error,
//     });
//   }
// };
export const getUserBookings = async (req: Request, res: Response) => {
  const { userEmail } = req.params;

  try {
    const user = await User.findOne({ userEmail: userEmail }).populate('bookings').exec();

    if (!user) {
      return res.status(404).send('User not found');
    }

    const bookings = user.bookings;

    if (!bookings || bookings.length === 0) {
      return res.status(404).send('Bookings not found');
    }

    res.status(200).json(bookings);
    console.log('User found:', user);
    console.log('User bookings:', bookings);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching businesses by category',
      error: error,
    });
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
