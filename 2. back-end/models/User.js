const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter the username'],
      unique: true,
      lowercase: true,
    },
    age: { type: Number, required: [true, 'Please enter the age'] },
    email: {
      type: String,
      required: [true, 'Please enter the email adress'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: [5, 'Minimum password length is 5 characters'],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10);
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.statics.login = async function (username, email, password) {
  if (!email || !password || !username) {
    throw Error('All fieltds must be filled');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Incorrect email or password');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect email or password');
  }

  return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
