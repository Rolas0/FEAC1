import './Category.scss';
import { Link } from 'react-router-dom';
import CategoryCard from '../cards/CategoryCard';
import cleaning from '../../assets/cleaning.png';
import repair from '../../assets/repair.png';
import painting from '../../assets/painting.png';
import shifting from '../../assets/delivery.png';
import plumbing from '../../assets/plumber.png';
import electricity from '../../assets/electricity.png';

function Category() {
    return (
        <section className="category_section">
            <CategoryCard
                category="cleaning"
                text="Cleaning"
                alt="cleaning"
                img={cleaning}
            />
            <CategoryCard
                category="repair"
                text="Repair"
                alt="repair"
                img={repair}
            />
            <CategoryCard
                category="painting"
                text="Painting"
                alt="painting"
                img={painting}
            />
            <CategoryCard
                category="shifting"
                text="Shifting"
                alt="shifting"
                img={shifting}
            />
            <CategoryCard
                category="plumbing"
                text="Plumbing"
                alt="plumbing"
                img={plumbing}
            />
            <CategoryCard
                category="electricity"
                text="Electricity"
                alt="electricity"
                img={electricity}
            />
        </section>
    );
}
export default Category;
