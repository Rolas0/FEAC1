import { businesses } from '../../consts/business';
import ServiceCard from '../cards/ServiceCard';
import './BusinessList.scss';

function BusinessList({ category }) {
    const filteredBusiness = category
        ? businesses.filter((business) => business.category === category)
        : businesses;
    return (
        <div className="business_container">
            {filteredBusiness.map((business) => (
                <ServiceCard key={business._id} business={business} />
            ))}
        </div>
    );
}

export default BusinessList;
