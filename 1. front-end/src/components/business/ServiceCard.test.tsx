import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { generatePath } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Business } from './types';
import { ROUTES } from '@/router/routes';

const mockBusiness: Business = {
    _id: '1',
    name: 'Test Business',
    category: 'Category',
    contactPerson: 'John Doe',
    address: '123 Test St, Test City',
    imageUrls: ['https://via.placeholder.com/150'],
    about: '',
    email: '',
};

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useNavigate: jest.fn(),
    };
});

describe('ServiceCard', () => {
    test('renders the business information', () => {
        render(
            <MemoryRouter>
                <ServiceCard business={mockBusiness} />
            </MemoryRouter>
        );

        expect(screen.getByAltText(mockBusiness.name)).toBeInTheDocument();
        expect(screen.getByText(mockBusiness.category)).toBeInTheDocument();
        expect(screen.getByText(mockBusiness.name)).toBeInTheDocument();
        expect(
            screen.getByText(mockBusiness.contactPerson)
        ).toBeInTheDocument();
        expect(screen.getByText(mockBusiness.address)).toBeInTheDocument();
    });

    test('navigates to the single business page when "Book now" button is clicked', () => {
        const mockNavigate = jest.fn();
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route
                        path="/"
                        element={<ServiceCard business={mockBusiness} />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const button = screen.getByRole('button', { name: /Book now/i });
        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledWith(
            generatePath(ROUTES.SINGLE_BUSINESS, { id: mockBusiness._id })
        );
    });
});
