import { useQuery } from '@tanstack/react-query';
import { fetchBusinesses, fetchBusinessById } from './api';
import { Business } from './types';

export const BUSINESS_KEY = 'BUSINESS';

export const useBusinesses = () => {
    return useQuery({
        queryKey: [BUSINESS_KEY],
        queryFn: fetchBusinesses,
    });
};

export const useBusinessesById = (id: string) => {
    return useQuery<Business>({
        queryKey: [BUSINESS_KEY, id],
        queryFn: () => fetchBusinessById(id),
    });
};
