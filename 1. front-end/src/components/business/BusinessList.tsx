import ServiceCard from './ServiceCard';
import styles from './BusinessList.module.scss';
import { useBusinesses } from './hooks';
import { Category } from '../category/types';

interface BusinessListProps {
    search: string;
    category?: Category['name'];
}

const BusinessList = ({ category, search }: BusinessListProps) => {
    const { data, error, isLoading } = useBusinesses(search);
    const businesses = data ?? [];

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading businesses.</p>;
    }

    const filteredBusiness = category
        ? businesses.filter((business) => business.category === category)
        : businesses;

    return (
        <div className={styles.business_container}>
            {filteredBusiness.length > 0 ? (
                filteredBusiness.map((business) => (
                    <ServiceCard key={business._id} business={business} />
                ))
            ) : (
                <p>No businesses found.</p>
            )}
        </div>
    );
};

export default BusinessList;
