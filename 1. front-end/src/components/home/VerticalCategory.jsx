import CategoryCard from '../cards/CategoryCard';
import cleaning from '../../assets/cleaning.png';
import repair from '../../assets/repair.png';
import painting from '../../assets/painting.png';
import shifting from '../../assets/delivery.png';
import plumbing from '../../assets/plumber.png';
import electricity from '../../assets/electricity.png';

function VerticalCategory() {
    return (
        <div className="vertical_list">
            <CategoryCard
                category="cleaning"
                text="Cleaning"
                alt="cleaning"
                img={cleaning}
                cName={'vertical_category_card'}
            />
            <CategoryCard
                category="repair"
                text="Repair"
                alt="repair"
                img={repair}
                cName={'vertical_category_card'}
            />
            <CategoryCard
                category="painting"
                text="Painting"
                alt="painting"
                img={painting}
                cName={'vertical_category_card'}
            />
            <CategoryCard
                category="shifting"
                text="Shifting"
                alt="shifting"
                img={shifting}
                cName={'vertical_category_card'}
            />
            <CategoryCard
                category="plumbing"
                text="Plumbing"
                alt="plumbing"
                img={plumbing}
                cName={'vertical_category_card'}
            />
            <CategoryCard
                category="electricity"
                text="Electricity"
                alt="electricity"
                img={electricity}
                cName={'vertical_category_card'}
            />
        </div>
    );
}
export default VerticalCategory;
