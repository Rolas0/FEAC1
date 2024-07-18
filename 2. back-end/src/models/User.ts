import mongoose, { Schema, Document, Types } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  _id: Types.ObjectId;
  name: string;
  age?: number;
  email: string;
  password: string;
  bookings: Types.ObjectId[];
  isCorrectPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Please enter the username'],
      unique: true,
      lowercase: true,
    },
    age: { type: Number },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    email: {
      type: String,
      required: [true, 'Please enter the email address'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [5, 'Minimum password length is 5 characters'],
    },
  },

  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

userSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) {
    throw new Error('All fields must be filled');
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw new Error('Incorrect email or password');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Incorrect email or password');
  }

  return user;
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
