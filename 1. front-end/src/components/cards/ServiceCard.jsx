import './ServiceCard.scss';

function ServiceCard({ business }) {
    return (
        <div className="service_card">
            <img
                className="business_img"
                src={business.images[0].url}
                alt={business.name}
            />
            <div className="busi_info_container">
                <span className="busi_span">{business.category}</span>
                <h3 className="busi_name">{business.name}</h3>
                <p className="busi_contact_person">{business.contactPerson}</p>
                <p className="busi_adress">{business.address}</p>
                <button>Book now</button>
            </div>
        </div>
    );
}
export default ServiceCard;
