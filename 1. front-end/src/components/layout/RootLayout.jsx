import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import './RootLayout.scss';

function RootLayout() {
    return (
        <>
            <Topbar />
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}
export default RootLayout;
