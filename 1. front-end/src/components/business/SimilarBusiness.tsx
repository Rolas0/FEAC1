import { useBusinesses } from './hooks';
import styles from './SimilarBusiness.module.scss';
import { ROUTES } from '@/router/routes';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

const SimilarBusiness = () => {
    const { data: business, isLoading, isError } = useBusinesses();
    const businessData = business ?? [];

    const navigate = useNavigate();

    const handleBusinessClick = (id: string) => {
        const singleBusinessPath = generatePath(ROUTES.SINGLE_BUSINESS, { id });
        navigate(singleBusinessPath);
    };

    return (
        <div className={styles.container}>
            <h2>Similar Businesses</h2>
            {isLoading ? (
                <h3>Loading images, please wait...</h3>
            ) : isError ? (
                <h3>Error loading images</h3>
            ) : (
                businessData.map((business) => (
                    <div key={business._id} className={styles.similar_card}>
                        <div
                            onClick={() => handleBusinessClick(business._id)}
                            className={styles.images}
                        >
                            {business.imageUrls.map((imageUrl, imgIndex) => (
                                <img
                                    className={styles.image}
                                    key={imgIndex}
                                    src={imageUrl}
                                    alt={business.name}
                                />
                            ))}
                        </div>
                        <div className={styles.card_info}>
                            <h4 className={styles.category}>
                                {business.category}
                            </h4>
                            <p className={styles.name}>{business.name}</p>
                            <p className={styles.address}>{business.address}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default SimilarBusiness;
