import './CategoryCard.scss';

import { useNavigate, generatePath, useParams } from 'react-router-dom';

function CategoryCard({ img, alt, text, category, cName }) {
    const navigate = useNavigate();
    const params = useParams();
    const handleClick = () => {
        const categoryPath = generatePath('/search/:category', { category });
        navigate(categoryPath);
    };

    const activeCategory = params.category;
    const isActive = activeCategory === category;

    return (
        <div
            onClick={handleClick}
            className={`${cName} ${isActive ? 'active' : ''}`}
        >
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    );
}
export default CategoryCard;
