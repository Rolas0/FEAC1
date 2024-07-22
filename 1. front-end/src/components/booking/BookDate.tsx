import styles from './BookDate.module.scss';
import { useContext, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import classNames from 'classnames';
import { usePostBooking } from './hooks';
import { Bookings } from './types';
import { CreateUserLoginContext } from '@/context/UserLoginContext';
import { useParams } from 'react-router-dom';

interface DateType {
    justDate: Date | null;
    dateTime: Date | null;
}

const BookDate = () => {
    const { id } = useParams();
    const [date, setDate] = useState<DateType>({
        justDate: null,
        dateTime: null,
    });
    const { user } = useContext(CreateUserLoginContext);
    const { mutateAsync: postBooking } = usePostBooking();

    const getTimes = () => {
        if (!date.justDate) return;

        const { justDate } = date;

        const start = add(justDate, { hours: 9 });
        const end = add(justDate, { hours: 23 });
        const interval = 60;

        const times = [];
        for (let i = start; i <= end; i = add(i, { minutes: interval })) {
            times.push(i);
        }
        return times;
    };

    const handleBookNow = async () => {
        const booking: Bookings = {
            businessId: id,
            date: date.justDate,
            time: format(date.dateTime!, 'kk:mm'),
            userEmail: user!.email,
            userName: user!.name,
            status: 'confirmed',
        };
        try {
            await postBooking(booking);
            alert('Booking successful!');
            setDate({ justDate: null, dateTime: null });
        } catch (error) {
            console.error('Error booking:', error);
            alert('Error booking appointment. Please try again.');
        }
    };

    const times = getTimes();
    return (
        <div className={styles.date_container}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>Book an Service</h3>
                <p className={styles.text}>
                    Select Date and Time slot to book a service
                </p>
                <span className={styles.select_date}>Select Date</span>
            </div>
            <div className={styles.calendar_div}>
                <ReactCalendar
                    minDate={new Date()}
                    className={styles.calendar}
                    view="month"
                    onClickDay={(date) =>
                        setDate((prev) => ({ ...prev, justDate: date }))
                    }
                />
            </div>
            <div className={styles.date_times_container}>
                <div className={styles.times_wrap}>
                    {times?.map((time, index) => (
                        <div key={index} className={styles.times}>
                            <button
                                type="button"
                                onClick={() => {
                                    console.log('Selected time:', time);
                                    setDate((prev) => ({
                                        ...prev,
                                        dateTime: time,
                                    }));
                                }}
                                className={classNames(styles.time_button, {
                                    [styles.active]:
                                        date.dateTime?.getTime() ===
                                        time.getTime(),
                                })}
                            >
                                {format(time, 'kk:mm')}
                            </button>
                        </div>
                    ))}
                </div>
                <div className={styles.button_div}>
                    <button
                        onClick={handleBookNow}
                        className={styles.button_bookNow}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDate;
