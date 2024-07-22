import { useContext, useState } from 'react';
import BookDate from '@/components/booking/BookDate';
import Sidebar from '@/components/business/Sidebar';
import SingleBusiness from '../components/business/SingleBusiness';
import './Business.module.scss';
import { CreateUserLoginContext } from '../context/UserLoginContext';

const Business = () => {
    const { isLoggedIn } = useContext(CreateUserLoginContext);
    const [isOpen, setIsOpen] = useState(false);

    const openSidebar = () => setIsOpen(true);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            {isLoggedIn ? (
                <>
                    <SingleBusiness openSideBar={openSidebar} />
                    <Sidebar
                        isOpen={isOpen}
                        onClose={closeSidebar}
                        open={isOpen}
                    >
                        <BookDate />
                    </Sidebar>
                </>
            ) : (
                <p>Please log in to book an appointment.</p>
            )}
        </>
    );
};

export default Business;
