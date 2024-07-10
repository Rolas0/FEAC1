import styles from './SearchCategory.module.scss';
import { useParams } from 'react-router-dom';
import BusinessList from '../components/business/BusinessList';
import VerticalCategory from '../components/category/VerticalCategory';

const SearchCategory = () => {
    const { category } = useParams();
    return (
        <section className={styles.search_category_container}>
            <div className={styles.category_vertical_container}>
                <VerticalCategory />
            </div>
            <div className={styles.business_list_container}>
                <h2>{category}</h2>
                <BusinessList category={category} />
            </div>
        </section>
    );
};

export default SearchCategory;
