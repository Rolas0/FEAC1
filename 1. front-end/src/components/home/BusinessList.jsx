import { businesses } from '../../consts/business';
import ServiceCard from '../cards/ServiceCard';
import styles from './BusinessList.module.scss';

const BusinessList = ({ category }) => {
    const filteredBusiness = category
        ? businesses.filter((business) => business.category === category)
        : businesses;
    return (
        <div className={styles.business_container}>
            {filteredBusiness.map((business) => (
                <ServiceCard key={business._id} business={business} />
            ))}
        </div>
    );
};

export default BusinessList;
