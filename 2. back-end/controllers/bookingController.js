const Booking = require('../models/Booking.js');

const getBookingsByEmail = async (req, res) => {
    const emailBookings = req.params.userEmail;
    try {
        const filteredBookings = await Booking.find({
            userEmail: emailBookings.toLowerCase(),
        });
        return res.status(200).send(filteredBookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postBooking = async (req, res) => {
    const post = req.body;
    const newBooking = new Booking(post);

    try {
        await newBooking.save();
        return res.status(201).json(newBooking);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const deleteBooking = async (req, res) => {
    const { id } = request.params;

    try {
        const bookingDelete = await Booking.findByIdAndDelete(id);
        return response.status(200).send(bookingDelete);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const getBookingByDate = async (req, res) => {
    const { businessId, date } = request.params;
    try {
        const getByDate = await Booking.find({
            businessId: businessId,
            date: new Date(date),
        });
        res.status(200).send(getByDate);
    } catch (err) {
        res.status(500).json({
            message:
                'Error fetching bookings for the specified date and business',
            error: err,
        });
    }
};

module.exports = {
    getBookingByDate,
    getBookingsByEmail,
    postBooking,
    deleteBooking,
};
