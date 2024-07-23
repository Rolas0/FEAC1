import { render, screen } from '@testing-library/react';
import BusinessList from './BusinessList';
import { useBusinesses } from './hooks';
import { Business } from './types';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./hooks');

const mockBusinesses: Business[] = [
    {
        _id: '1',
        imageUrls: ['https://example.com/image1.jpg'],
        name: 'Business 1',
        category: 'Restaurant',
        contactPerson: 'John Doe',
        address: '123 Street A',
        email: 'business@gmail.com',
        about: 'good restaurant',
    },
    {
        _id: '2',
        imageUrls: ['https://example.com/image2.jpg'],
        name: 'Business 2',
        category: 'Retail',
        contactPerson: 'Jane Smith',
        address: '456 Street B',
        email: 'business1@gmail.com',
        about: 'good retail business',
    },
];

describe('BusinessList Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders loading state', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: [],
            error: null,
            isLoading: true,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" />
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders error state', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: [],
            error: new Error('Failed to fetch'),
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" />
            </MemoryRouter>
        );

        expect(
            screen.getByText('Error loading businesses.')
        ).toBeInTheDocument();
    });

    test('renders a list of businesses', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: mockBusinesses,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" />
            </MemoryRouter>
        );

        expect(screen.getByText('Business 1')).toBeInTheDocument();
        expect(screen.getByText('Business 2')).toBeInTheDocument();
    });

    test('filters businesses by category', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: mockBusinesses,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" category="Restaurant" />
            </MemoryRouter>
        );

        expect(screen.getByText('Business 1')).toBeInTheDocument();
        expect(screen.queryByText('Business 2')).not.toBeInTheDocument();
    });

    test('renders no businesses found when no results match', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: mockBusinesses,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" category="Nonexistent Category" />
            </MemoryRouter>
        );

        expect(screen.getByText('No businesses found.')).toBeInTheDocument();
    });

    test('renders no businesses found when data is empty', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: [],
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList search="" />
            </MemoryRouter>
        );

        expect(screen.getByText('No businesses found.')).toBeInTheDocument();
    });
});
