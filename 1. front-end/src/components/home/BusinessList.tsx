import { businesses } from '../../consts/business';
import ServiceCard from '../cards/ServiceCard';
import styles from './BusinessList.module.scss';

interface Business {
    _id: string;
    name: string;
    images: { url: string }[];
    category: string;
    contactPerson: string;
    address: string | number;
}

interface BusinessListProps {
    category?: string;
}

const BusinessList = ({ category }: BusinessListProps) => {
    const filteredBusiness = category
        ? businesses.filter(
              (business: Business) => business.category === category
          )
        : businesses;
    return (
        <div className={styles.business_container}>
            {filteredBusiness.map((business: Business) => (
                <ServiceCard key={business._id} business={business} />
            ))}
        </div>
    );
};

export default BusinessList;
