import styles from './Hero.module.scss';
import searchIcon from '@/assets/search-icon.png';
import { CiSearch } from 'react-icons/ci';

interface HeroProps {
    onSearch: (search: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
    return (
        <div className={styles.home_section}>
            <div className={styles.title}>
                <h1>
                    Find Home <span>Service/Repair</span> <br /> Near You
                </h1>
                <p>Explore Best home Service & Repair near you</p>
            </div>

            <div className={styles.search_div}>
                <div className={styles.search_bar}>
                    <input
                        type="text"
                        onChange={(event) => onSearch(event.target.value)}
                        placeholder="Search"
                    />
                    <CiSearch className={styles.img_search} />
                </div>
            </div>
        </div>
    );
};

export default Hero;
