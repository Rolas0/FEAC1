const User = require('../models/User');
const { createToken } = require('../utils/password');

const handleErrors = (err) => {
  let errors = { email: '', password: '' };

  // Duplicate error code
  if (err.code === 11000) {
    errors.email = ' that email is already registered';
    return errors;
  }
  //Validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const postRegister = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.isCorrectPassword(password))) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  const token = createToken({ id: user._id });
  return res.status(200).json({ token, user });
};

module.exports = { postRegister, postLogin };
