import { ROUTES } from '../../router/routes';
import styles from './CategoryCard.module.scss';
import { CategoryCardProps } from './types';

import { useNavigate, generatePath, useParams } from 'react-router-dom';

const CategoryCard = ({
    img,
    alt,
    text,
    category,
    type = 'horizontal',
}: CategoryCardProps) => {
    const navigate = useNavigate();
    const params = useParams();
    const handleClick = () => {
        const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category });
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
