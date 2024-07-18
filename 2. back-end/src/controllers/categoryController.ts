import Category from '../models/Category';
import { Request, Response } from 'express';

export const getCategory = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching categories', error: err });
  }
};

export const postCategory = async (req: Request, res: Response) => {
  const post = req.body;
  const newCategory = new Category(post);

  try {
    await newCategory.save();
    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({
      message: 'Error creating booking',
      error: (err as Error)?.message ?? err,
    });
  }
};
