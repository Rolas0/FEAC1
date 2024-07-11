import styles from './ServiceCard.module.scss';
import { Business } from './types';

interface ServiceCardProps {
    business: Business;
}

const ServiceCard = ({ business }: ServiceCardProps) => {
    console.log(business.imageUrls[0]);
    return (
        <div className={styles.service_card}>
            <img
                className={styles.business_img}
                src={business.imageUrls[0]}
                alt={business.name}
            />
            <div className={styles.business_info_container}>
                <span className={styles.business_span}>
                    {business.category}
                </span>
                <h3 className={styles.business_name}>{business.name}</h3>
                <p className={styles.business_contact_person}>
                    {business.contactPerson}
                </p>
                <p className={styles.business_adress}>{business.address}</p>
                <button className={styles.business_button}>Book now</button>
            </div>
        </div>
    );
};
export default ServiceCard;
