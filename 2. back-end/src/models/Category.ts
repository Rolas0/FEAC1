import mongoose from 'mongoose';

interface ICategory {
  name: string;
  color: string;
  url: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#FFFFFF',
  },

  url: {
    type: String,
    default: 'http://example.com/default-icon.png',
  },
});

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;
