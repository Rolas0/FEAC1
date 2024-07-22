export interface Booking {
    _id: string;
    businessId: string;
    date: Date | null;
    time: string;
    userEmail: string;
    userName: string;
    status: 'confirmed' | 'pending' | 'cancelled';
}

export type NewBooking = Omit<Booking, '_id'>;
