const mongoose = require('mongoose');
const Bussineses = require('../models/Bussines.js');

const getBusinesses = async (req, res) => {
    try {
        const newBusinesses = await Bussineses.find();

        return res.status(200).send(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBusinessesByCategory = async (req, res) => {
    const categories = req.params.category;
    try {
        const filteredBusinesses = await Bussineses.find({
            category: categories.toLowerCase(),
        });
        return res.status(200).send(filteredBusinesses);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching businesses by category',
            error: error,
        });
    }
};

const getBusinessesByID = async (req, res) => {
    const findbussines = req.params.id;
    try {
        const business = await Bussineses.findById(findbussines);
        if (business) {
            res.status(200).send(business);
        } else {
            res.status(404).send('Business not found');
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error fetching business',
            error: err,
        });
    }
};

const postBussines = async (req, res) => {
    const post = request.body;
    const newBusiness = new Bussineses(post);

    try {
        await newCategory.save();
        return res.status(201).json(newBusiness);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const updateBussines = async (req, res) => {
    try {
        const updatedUser = await Bussineses.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.status(200).send(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

module.exports = {
    getBusinesses,
    getBusinessesByCategory,
    getBusinessesByID,
    postBussines,
    updateBussines,
};
