import styles from './ServiceCard.module.scss';

const ServiceCard = ({ business }) => {
    return (
        <div className={styles.service_card}>
            <img
                className={styles.business_img}
                src={business.images[0].url}
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
