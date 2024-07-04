const User = require('../models/User');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
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

module.exports = { deleteUser, updateUser, getAllUsers };
