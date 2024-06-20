import BusinessList from '../components/home/BusinessList.jsx';
import Category from '../components/home/Category.jsx';
import Hero from '../components/home/Hero.jsx';

function Home() {
    return (
        <>
            <Hero />
            <Category />
            <h3>Popular businesses</h3>
            <BusinessList />
        </>
    );
}
export default Home;
