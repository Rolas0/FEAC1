import { ReactNode } from 'react';
import { Booking } from '../booking/types';

export interface User {
    time: ReactNode;
    date: string | number | Date;
    businessId: any;
    _id: string;
    name: string;
    email: string;
    bookings?: Booking[];
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    status: string;
    token: string;
    user: User;
}

export interface RegisterRequest extends LoginRequest {
    name: string;
}
