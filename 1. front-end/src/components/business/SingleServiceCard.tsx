// SingleServiceCard.tsx
import styles from './SingleServiceCard.module.scss';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { BiNotepad } from 'react-icons/bi';
import { useBusinessesById } from './hooks';
import { LuUpload } from 'react-icons/lu';
import { Business } from './types';

interface SingleServiceProps {
    openSideBar: () => void;
    businessId: string;
}

const SingleServiceCard = ({ openSideBar, businessId }: SingleServiceProps) => {
    const {
        data: business,
        isLoading,
        isError,
    } = useBusinessesById(businessId);
    const businessData: Business | null = business ?? null;

    return (
        <>
            {isLoading ? (
                <div>Loading</div>
            ) : isError ? (
                <div>Error</div>
            ) : businessData ? (
                <>
                    <div className={styles.header}>
                        <div className={styles.avatar_div}>
                            <img
                                className={styles.avatar}
                                src={businessData.imageUrls[0]}
                                alt={businessData.name}
                            />
                        </div>
                        <div className={styles.texts}>
                            <span className={styles.span}>
                                {businessData.category}
                            </span>
                            <h3>{businessData.name}</h3>
                            <p>
                                <CiLocationOn />
                                {businessData.address}
                            </p>
                            <p>
                                <MdOutlineEmail />
                                {businessData.email}
                            </p>
                        </div>
                    </div>

                    <div className={styles.right_div}>
                        <div className={styles.info}>
                            <div className={styles.owner_info}>
                                <div className={styles.upload_span}>
                                    <p className={styles.upload}>
                                        <LuUpload />
                                    </p>
                                </div>
                                <p>{businessData.contactPerson}</p>
                                <p>Available 8:00 AM to 10:00 PM</p>
                            </div>
                            <div className={styles.button_div}>
                                <button
                                    onClick={openSideBar}
                                    className={styles.book_button}
                                >
                                    <BiNotepad /> Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>No business data found</div>
            )}
        </>
    );
};

export default SingleServiceCard;
