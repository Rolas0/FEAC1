import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createBooking, fetchUserBookings } from './api';

export const BOOKING_KEY = 'BOOKING';

export const useUserBookings = (
    userId: string,
    status: 'confirmed' | 'pending' | 'cancelled'
) => {
    return useQuery({
        queryKey: [BOOKING_KEY, userId, status],
        queryFn: () => fetchUserBookings(userId, status),
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
