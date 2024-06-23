import './Category.scss';

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
                cName={'category_card'}
            />
            <CategoryCard
                category="repair"
                text="Repair"
                alt="repair"
                img={repair}
                cName={'category_card'}
            />
            <CategoryCard
                category="painting"
                text="Painting"
                alt="painting"
                img={painting}
                cName={'category_card'}
            />
            <CategoryCard
                category="shifting"
                text="Shifting"
                alt="shifting"
                img={shifting}
                cName={'category_card'}
            />
            <CategoryCard
                category="plumbing"
                text="Plumbing"
                alt="plumbing"
                img={plumbing}
                cName={'category_card'}
            />
            <CategoryCard
                category="electricity"
                text="Electricity"
                alt="electricity"
                img={electricity}
                cName={'category_card'}
            />
        </section>
    );
}
export default Category;
