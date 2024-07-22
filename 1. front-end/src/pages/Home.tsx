import BusinessList from '@/components/business/BusinessList';
import Category from '@/components/category/Category';
import Hero from '@/components/home/Hero';
import styles from './Home.module.scss';
import { useDebounceCallback } from 'usehooks-ts';
import { useState } from 'react';

const Home = () => {
    const [search, setSearch] = useState<string>('');

    const debouncedSearch = useDebounceCallback((search: string) => {
        setSearch(search);
    }, 500);

    return (
        <>
            <Hero onSearch={debouncedSearch} />
            <Category />
            <h2 className={styles.h2}>Popular businesses</h2>
            <BusinessList search={search} />
        </>
    );
};

export default Home;
