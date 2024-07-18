import BusinessGallary from './BusinessGallary';
import SimilarBusiness from './SimilarBusiness';
import styles from './SingleBusiness.module.scss';
import SingleServiceCard from './SingleServiceCard';

import { useParams } from 'react-router-dom';

interface SingleBusinessProps {
    openSideBar: () => void;
}

const SingleBusiness = ({ openSideBar }: SingleBusinessProps) => {
    const { id } = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.top_section}>
                <SingleServiceCard openSideBar={openSideBar} businessId={id} />
            </div>

            <div className={styles.middle_section}>
                <div className={styles.description_gallery}>
                    <div className={styles.description}>
                        <h2>Description</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto ut id soluta beatae possimus
                            dignissimos labore cum, amet modi voluptate
                            similique maiores optio ea vitae deleniti illum vero
                            excepturi harum. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nemo, omnis aliquid.
                            Natus quaerat placeat ducimus sed fugiat cumque
                            blanditiis asperiores officia ad, culpa unde
                            necessitatibus similique provident error et Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit.
                            Enim repellat deleniti eveniet quisquam mollitia!
                            Libero eos molestiae eius, illum eveniet autem vel
                            minima explicabo illo iste nesciunt quisquam vero
                            suscipit?
                        </p>
                    </div>

                    <BusinessGallary />
                </div>

                <SimilarBusiness />
            </div>
        </div>
    );
};

export default SingleBusiness;
