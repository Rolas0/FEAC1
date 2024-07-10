import express from 'express';
const router = express.Router();
import authMiddleware from '../middlewares/authMiddleware';
import { getBookingByDate, getBookingsByEmail, postBooking, deleteBooking } from '../controllers/bookingController';
import {
  getBusinesses,
  getBusinessesByCategory,
  getBusinessesByID,
  postBussines,
  updateBussines,
} from '../controllers/bussinesesController';
import { getCategory, postCategory } from '../controllers/categoryController';
import { deleteUser, updateUser, getAllUsers } from '../controllers/userController';
import { postRegister, postLogin } from '../controllers/authController';

router.get('/businesses', getBusinesses);
router.get('/businesses/category/:category', getBusinessesByCategory);
router.get('/businesses/:id', getBusinessesByID);
router.post('/businesses', postBussines);
router.put('/businesses/:id', updateBussines);

router.get('/bookings/user/:email', getBookingsByEmail);
router.get('/businesses/:businessId/bookings/date/:date', getBookingByDate);
router.post('/bookings', postBooking);
router.delete('/bookings/:id', deleteBooking);

router.get('/categories', getCategory);
router.post('/categories', postCategory);

router.get('/', authMiddleware, getAllUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.post('/auth/register', postRegister);
router.post('/auth/login', postLogin);

export default router;
