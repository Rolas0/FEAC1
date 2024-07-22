import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BusinessList from './BusinessList';
import { useBusinesses } from './hooks';
import { Business } from './types';

jest.mock('./hooks');

const mockBusinesses: Business[] = [
    {
        _id: '1',
        name: 'Test Business 1',
        category: 'Category 1',
        contactPerson: 'John Doe',
        address: '123 Test St, Test City',
        imageUrls: ['https://via.placeholder.com/150'],
        about: 'About Test Business 1',
        email: 'test1@example.com',
    },
    {
        _id: '2',
        name: 'Test Business 2',
        category: 'Category 2',
        contactPerson: 'Jane Doe',
        address: '456 Test Ave, Test City',
        imageUrls: ['https://via.placeholder.com/150'],
        about: 'About Test Business 2',
        email: 'test2@example.com',
    },
];

describe('BusinessList', () => {
    test('renders loading state', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: null,
            error: null,
            isLoading: true,
        });

        render(
            <MemoryRouter>
                <BusinessList />
            </MemoryRouter>
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders error state', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: null,
            error: true,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList />
            </MemoryRouter>
        );

        expect(
            screen.getByText('Error loading businesses.')
        ).toBeInTheDocument();
    });

    test('renders list of businesses', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: mockBusinesses,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList />
            </MemoryRouter>
        );

        expect(screen.getByText('Test Business 1')).toBeInTheDocument();
        expect(screen.getByText('Test Business 2')).toBeInTheDocument();
    });

    test('renders "No businesses found." when there are no businesses', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: [],
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList />
            </MemoryRouter>
        );

        expect(screen.getByText('No businesses found.')).toBeInTheDocument();
    });

    test('filters businesses by category', () => {
        (useBusinesses as jest.Mock).mockReturnValue({
            data: mockBusinesses,
            error: null,
            isLoading: false,
        });

        render(
            <MemoryRouter>
                <BusinessList category="Category 1" />
            </MemoryRouter>
        );

        expect(screen.getByText('Test Business 1')).toBeInTheDocument();
        expect(screen.queryByText('Test Business 2')).toBeNull();
    });
});
