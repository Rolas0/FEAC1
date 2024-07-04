const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware.js');
const {
  getBookingByDate,
  getBookingsByEmail,
  postBooking,
  deleteBooking,
} = require('../controllers/bookingController.js');
const {
  getBusinesses,
  getBusinessesByCategory,
  getBusinessesByID,
  postBussines,
  updateBussines,
} = require('../controllers/bussinesesController.js');
const { getCategory, postCategory } = require('../controllers/categoryController.js');
const { deleteUser, updateUser, getAllUsers } = require('../controllers/userController.js');
const { postRegister, postLogin } = require('../controllers/authController.js');

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

router.post('/register', postRegister);
router.post('/login', postLogin);

module.exports = router;
