import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createBooking, fetchUserBookings } from './api';
import { Bookings } from './types';

export const BOOKING_KEY = 'BOOKING';

export const useUserBookings = (userEmail: string) => {
    return useQuery<Bookings>({
        queryKey: [BOOKING_KEY, userEmail],
        queryFn: () => fetchUserBookings(userEmail),
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
