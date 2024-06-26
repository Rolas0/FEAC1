import styles from './CategoryCard.module.scss';

import { useNavigate, generatePath, useParams } from 'react-router-dom';

const CategoryCard = ({ img, alt, text, category, type = 'horizontal' }) => {
    const navigate = useNavigate();
    const params = useParams();
    const handleClick = () => {
        const categoryPath = generatePath('/search/:category', { category });
        navigate(categoryPath);
    };

    const activeCategory = params.category;
    const isActive = activeCategory === category;

    const cardStyle =
        type === 'vertical'
            ? styles.vertical_category_card
            : styles.category_card;

    return (
        <div
            onClick={handleClick}
            className={`${cardStyle} ${isActive ? styles.active : ''}`}
        >
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    );
};

export default CategoryCard;
