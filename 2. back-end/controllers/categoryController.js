const Category = require('../models/Category');

const getCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).send(categories);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const postCategory = async (req, res) => {
    const post = req.body;
    const newCategory = new Category(post);

    try {
        await newCategory.save();
        return res.status(201).json(newCategory);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = { getCategory, postCategory };
