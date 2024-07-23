import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createBooking, fetchUserBookings } from './api';
import { CreateUserLoginContext } from '@/context/UserLoginContext';
import { useContext } from 'react';
import { BookingStatus } from './types';

export const BOOKING_KEY = 'BOOKING';

export const useUserBookings = (status: BookingStatus) => {
    const { user } = useContext(CreateUserLoginContext);
    const id = user!._id;
    return useQuery({
        queryKey: [BOOKING_KEY, id, status],
        queryFn: () => fetchUserBookings(id, status),
    });
};

export const usePostBooking = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createBooking,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: [BOOKING_KEY] }),
    });
};
