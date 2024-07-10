import CategoryCard from './CategoryCard';
import cleaning from '../../assets/cleaning.png';
import repair from '../../assets/repair.png';
import painting from '../../assets/painting.png';
import shifting from '../../assets/delivery.png';
import plumbing from '../../assets/plumber.png';
import electricity from '../../assets/electricity.png';

const VerticalCategory = () => {
    return (
        <div className="vertical_list">
            <CategoryCard
                category="cleaning"
                text="Cleaning"
                alt="cleaning"
                img={cleaning}
                type="vertical"
            />
            <CategoryCard
                category="repair"
                text="Repair"
                alt="repair"
                img={repair}
                type="vertical"
            />
            <CategoryCard
                category="painting"
                text="Painting"
                alt="painting"
                img={painting}
                type="vertical"
            />
            <CategoryCard
                category="shifting"
                text="Shifting"
                alt="shifting"
                img={shifting}
                type="vertical"
            />
            <CategoryCard
                category="plumbing"
                text="Plumbing"
                alt="plumbing"
                img={plumbing}
                type="vertical"
            />
            <CategoryCard
                category="electricity"
                text="Electricity"
                alt="electricity"
                img={electricity}
                type="vertical"
            />
        </div>
    );
};

export default VerticalCategory;
