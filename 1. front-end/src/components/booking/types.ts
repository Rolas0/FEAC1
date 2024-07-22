import { Business } from '../business/types';

export interface Bookings {
    _id: string;
    businessId: Business;
    date: Date | null;
    time: string;
    userEmail: string;
    userName: string;
    status: 'confirmed' | 'pending' | 'cancelled';
}
