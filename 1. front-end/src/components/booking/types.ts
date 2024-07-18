export interface Bookings {
    businessId: string;
    date: Date | null;
    time: string;
    userEmail: string;
    userName: string;
    status: 'confirmed' | 'pending' | 'cancelled';
}
