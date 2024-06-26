import './App.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import SearchCategory from './pages/SearchCategory';
import UserLoginProvider from './context/UserLoginContext';

function App() {
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
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Register />,
                },
                {
                    path: '/search/:category',
                    element: <SearchCategory />,
                },
            ],
        },
    ]);
    return (
        <>
            <UserLoginProvider>
                <div className="App">
                    <RouterProvider router={router} />;
                </div>
            </UserLoginProvider>
        </>
    );
}

export default App;
