import axiosInstance from '../../config/axios';
import { Business } from './types';

export const fetchBusinesses = async (): Promise<Business[]> => {
    const response = await axiosInstance.get('/businesses');
    console.log(response.data);
    return await response.data;
};
