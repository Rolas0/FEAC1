import styles from './BusinessGallary.module.scss';
import { useBusinesses } from './hooks';

const BusinessGallary = () => {
    const { data: business, isLoading, isError } = useBusinesses();
    const businessData = business ?? [];

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>Gallery</h2>
            {isLoading ? (
                <h3>Loading images, please wait...</h3>
            ) : isError ? (
                <h3>Error loading images</h3>
            ) : (
                <div className={styles.galery_container}>
                    {businessData.map((data) => (
                        <div key={data._id} className={styles.images}>
                            {data.imageUrls.map((imageUrl, imgIndex) => (
                                <img
                                    className={styles.image}
                                    key={imgIndex}
                                    src={imageUrl}
                                    alt={data.name}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BusinessGallary;
