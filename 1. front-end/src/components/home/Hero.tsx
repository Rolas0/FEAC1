import styles from './Hero.module.scss';
import searchIcon from '../../assets/search-icon.png';

const Hero = () => {
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
                    <input type="text" placeholder="Serch" />
                    <img
                        className={styles.img_search}
                        src={searchIcon}
                        alt="search-icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
