import CategoryCard from './CategoryCard';
import { useCategories } from './hooks';
import styles from './Category.module.scss';

const Category = () => {
    const { data: categories } = useCategories();

    return (
        <div className={styles.container}>
            {categories?.map((category) => (
                <CategoryCard
                    key={category.name}
                    category={category}
                    className={styles.card}
                />
            ))}
        </div>
    );
};

export default Category;
