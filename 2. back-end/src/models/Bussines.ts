import mongoose from 'mongoose';
import { isEmail } from 'validator';

interface IBusiness {
  name: string;
  about: string;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  imageUrls: string[];
}

const businessSchema = new mongoose.Schema<IBusiness>({
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
  imageUrls: [
    {
      type: String,
      required: true,
    },
  ],
});

const Business = mongoose.model<IBusiness>('Business', businessSchema);

export default Business;
