import BusinessList from '../components/home/BusinessList.jsx';
import Category from '../components/home/Category.jsx';
import Hero from '../components/home/Hero.jsx';
import './Home.scss';

function Home() {
    return (
        <>
            <Hero />
            <Category />
            <h2>Popular businesses</h2>
            <BusinessList />
        </>
    );
}
export default Home;
