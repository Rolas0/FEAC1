import BookingCard from './BookingCard';
import styles from './Bookings.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { useUserBookings } from './hooks';
import { BookingStatus } from './types';

const BookingList = () => {
    const [status, setStatus] = useState<BookingStatus>('confirmed');

    const { data: bookings, isLoading, isError } = useUserBookings(status);
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
                            [styles.active]: status === 'completed',
                        })}
                        onClick={() => setStatus('completed')}
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
