import styles from './BookingCard.module.scss';
import { GoPerson } from 'react-icons/go';
import { CiLocationOn } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';
import { LuClock4 } from 'react-icons/lu';
import { Bookings } from './types';

interface BookingCardProps {
    bookingsData: Bookings[];
    isLoading: boolean;
    isError: boolean;
}

const BookingCard = ({
    bookingsData,
    isLoading,
    isError,
}: BookingCardProps) => {
    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error loading bookings</div>
            ) : (
                bookingsData.map((booking) => (
                    <div key={booking._id} className={styles.bookingCard}>
                        <img src={booking.businessId.imageUrls[0]} alt="" />

                        <div className={styles.info}>
                            <strong className={styles.p_category}>
                                {booking.businessId.category}
                            </strong>
                            <p className={styles.person_Name}>
                                <GoPerson className={styles.icon} />
                                {booking.businessId.contactPerson}
                            </p>
                            <p>
                                <CiLocationOn className={styles.icon} />
                                {booking.businessId.address}
                            </p>
                            <p>
                                <CiCalendar className={styles.icon} /> Service
                                on:
                                {booking.date
                                    ? new Date(
                                          booking.date
                                      ).toLocaleDateString()
                                    : 'N/A'}
                            </p>
                            <p>
                                <LuClock4 className={styles.icon} /> Service on:
                                {booking.time}
                            </p>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default BookingCard;
