import axiosInstance from '@/config/axios';
import { Bookings } from './types';

export const fetchUserBookings = async (
    userId: string,
    status: 'confirmed' | 'pending' | 'cancelled'
): Promise<Bookings[]> => {
    const response = await axiosInstance.get(`/user/${userId}/bookings`, {
        params: { status },
    });
    return response.data;
};

export const fetchBookingByDate = async (
    businessId: string,
    date: string
): Promise<Bookings[]> => {
    const response = await axiosInstance.get(
        `/businesses/${businessId}/bookings/date/${date}`
    );
    return response.data;
};

export const createBooking = async (booking: Bookings): Promise<Bookings> => {
    const response = await axiosInstance.post('/bookings', booking);
    return response.data;
};

export const deleteBooking = async (id: string): Promise<void> => {
    await axiosInstance.delete(`/bookings/${id}`);
};
