import './CategoryCard.scss';

import { useNavigate, generatePath } from 'react-router-dom';

function CategoryCard({ img, alt, text, category }) {
    const navigate = useNavigate();

    const handleClick = () => {
        const categoryPath = generatePath('/search/:category', { category });
        navigate(categoryPath);
    };

    return (
        <div onClick={handleClick} className="category_card">
            <img src={img} alt={alt} />
            <p>{text}</p>
        </div>
    );
}
export default CategoryCard;
