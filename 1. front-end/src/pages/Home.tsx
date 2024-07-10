import BusinessList from '../components/home/BusinessList';
import Category from '../components/home/Category';
import Hero from '../components/home/Hero';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <>
            <Hero />
            <Category />
            <h2 className={styles.h2}>Popular businesses</h2>
            <BusinessList category={''} />
        </>
    );
};

export default Home;
