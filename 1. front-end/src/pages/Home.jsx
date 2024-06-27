import BusinessList from '../components/home/BusinessList.jsx';
import Category from '../components/home/Category.jsx';
import Hero from '../components/home/Hero.jsx';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <h2 className={styles.h2}>Popular businesses</h2>
            <BusinessList />
        </>
    );
};

export default Home;
