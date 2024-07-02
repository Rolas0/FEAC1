const mongoose = require('mongoose');
const { isEmail } = require('validator');

const bussinesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        default: '',
    },
    address: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    contactPerson: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter the email adress'],
        unique: true,
        validate: [isEmail, 'Please enter a valid email'],
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model('Bussines', bussinesSchema);
