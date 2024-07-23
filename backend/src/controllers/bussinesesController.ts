import Business from '../models/Bussines';
import { Request, Response } from 'express';

export const getBusinesses = async (req: Request, res: Response) => {
  const search = (req.query.search as string) || '';
  try {
    const query: any = {};

    if (search) {
      query.$or = [{ name: { $regex: search, $options: 'i' } }, { category: { $regex: search, $options: 'i' } }];
    }

    const businesses = await Business.find(query);
    return res.status(200).send(businesses);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching businesses',
      error: error,
    });
  }
};

export const getBusinessesByCategory = async (req: Request, res: Response) => {
  const categories = req.params.category;
  try {
    const filteredBusinesses = await Business.find({
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

export const getBusinessesByID = async (req: Request, res: Response) => {
  const findbussines = req.params.id;
  try {
    const business = await Business.findById(findbussines);
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

export const postBussines = async (req: Request, res: Response) => {
  const post = req.body;
  const newBusiness = new Business(post);

  try {
    await newBusiness.save();
    return res.status(201).json(newBusiness);
  } catch (err) {
    res.status(500).json({
      message: 'Server error while adding business.',
      error: (err as Error).message,
    });
  }
};

export const updateBussines = async (req: Request, res: Response) => {
  try {
    const updatedUser = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('User not found');
    }
    return res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
