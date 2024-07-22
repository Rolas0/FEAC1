import BookingCard from './BookingCard';
import styles from './Bookings.module.scss';
import classNames from 'classnames';
import { useContext, useState } from 'react';
import { useUserBookings } from './hooks';
import { CreateUserLoginContext } from '@/context/UserLoginContext';

const BookingList = () => {
    const { user } = useContext(CreateUserLoginContext);

    const id = user!._id;

    const [status, setStatus] = useState<'confirmed' | 'pending' | 'cancelled'>(
        'confirmed'
    );

    const { data: bookings, isLoading, isError } = useUserBookings(id, status);
    const bookingsData = bookings ?? [];

    return (
        <section className={styles.container}>
            <h2>My Bookings</h2>
            <div className={styles.bookings_container}>
                <div className={styles.tabs}>
                    <button
                        className={classNames({
                            [styles.active]: status === 'confirmed',
                        })}
                        onClick={() => setStatus('confirmed')}
                    >
                        Booked
                    </button>
                    <button
                        className={classNames({
                            [styles.active]: status === 'cancelled',
                        })}
                        onClick={() => setStatus('cancelled')}
                    >
                        Completed
                    </button>
                </div>
                <div className={styles.bookings}>
                    <BookingCard
                        bookingsData={bookingsData}
                        isLoading={isLoading}
                        isError={isError}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingList;
