import './SearchCategory.scss';
import { useParams } from 'react-router-dom';
import BusinessList from '../components/home/BusinessList';
import VerticalCategory from '../components/home/VerticalCategory';

function SearchCategory() {
    const { category } = useParams();
    return (
        <section className="search_category_container">
            <div className="category_vertical_container">
                <VerticalCategory />
            </div>
            <div className="business_list_container">
                <h2>{category}</h2>
                <BusinessList category={category} />
            </div>
        </section>
    );
}
export default SearchCategory;
