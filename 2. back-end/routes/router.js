const express = require('express');
const router = express.Router();
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
const {
    getCategory,
    postCategory,
} = require('../controllers/categoryController.js');

router.get('/businesses', getBusinesses);
router.get('/businesses/category/:category', getBusinessesByCategory);
router.get('/businesses/:id', getBusinessesByID);
router.post('/businesses', postBussines);
router.put('/businesses/:id', updateBussines);

router.get('/bookings/user/:email', getBookingsByEmail);
router.get('/businesses/:businessId/bookings/date/:date', getBookingByDate);
router.post('/bookings', postBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
