import axiosInstance from '@/config/axios';
import { Business } from './types';

export const fetchBusinesses = async (search: string): Promise<Business[]> => {
    const response = await axiosInstance.get('/businesses', {
        params: {
            search,
        },
    });
    return response.data;
};

export const fetchBusinessById = async (id: string): Promise<Business> => {
    const response = await axiosInstance.get(`/businesses/${id}`);
    return response.data;
};
