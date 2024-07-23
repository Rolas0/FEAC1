import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

const expiresIn = '90d';

export const createToken = (payload: Types.ObjectId) => {
  const token = jwt.sign({ payload }, process.env.SECRET_TOKEN!, { expiresIn });
  return token;
};
