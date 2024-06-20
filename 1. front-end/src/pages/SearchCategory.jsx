import { useParams } from 'react-router-dom';
import BusinessList from '../components/home/BusinessList';

function SearchCategory() {
    const { category } = useParams();
    return (
        <div>
            <BusinessList category={category} />
        </div>
    );
}
export default SearchCategory;
