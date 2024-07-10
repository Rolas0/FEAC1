import axiosInstance from '../../config/axios';
import { CategoryCardProps } from './types';

export const fetchCategories = async (): Promise<CategoryCardProps[]> => {
    const response = await axiosInstance.get('/categories');
    return await response.data;
};
