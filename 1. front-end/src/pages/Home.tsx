import BusinessList from '../components/business/BusinessList';
import Category from '../components/category/Category';
import Hero from '../components/home/Hero';
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
