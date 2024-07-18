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
import SingleBusiness from './components/business/SingleBusiness';
import Business from './pages/Business';

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'aboutus',
                element: <AboutUs />,
            },

            {
                path: 'search/:category',
                element: <SearchCategory />,
            },
            {
                path: '/businesses/:id',
                element: <Business />,
            },
        ],
    },
    {
        element: <AuthLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
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
