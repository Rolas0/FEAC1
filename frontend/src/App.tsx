import styles from './App.module.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './components/layout/RootLayout';
import AuthLayout from './components/layout/AuthLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import SearchCategory from './pages/SearchCategory';
import { UserLoginProvider } from './context/UserLoginContext';
import { SnackbarProvider } from 'notistack';
import Business from './pages/Business';
import Bookings from './pages/Bookings';
import { ROUTES } from './router/routes';

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.SERVICES,
                element: <Services />,
            },
            {
                path: ROUTES.ABOUT_US,
                element: <AboutUs />,
            },

            {
                path: ROUTES.SEARCH_CATEGORY,
                element: <SearchCategory />,
            },
            {
                path: ROUTES.SINGLE_BUSINESS,
                element: <Business />,
            },
            {
                path: ROUTES.MY_BOOKING,
                element: <Bookings />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <Login />,
            },
            {
                path: ROUTES.REGISTER,
                element: <Register />,
            },
        ],
    },
]);
const App = () => {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <UserLoginProvider>
                    <SnackbarProvider>
                        <div className={styles.App}>
                            <RouterProvider router={router} />;
                        </div>
                    </SnackbarProvider>
                </UserLoginProvider>
            </QueryClientProvider>
        </>
    );
};

export default App;
