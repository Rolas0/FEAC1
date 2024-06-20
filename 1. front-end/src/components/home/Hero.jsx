import './Hero.scss';
import searchIcon from '../../assets/search-icon.png';

function Hero() {
    return (
        <div className="home_section">
            <div className="title">
                <h1>
                    Find Home <span>Service/Repair</span> <br /> Near You
                </h1>
                <p>Explore Best home Service & Repair near you</p>
            </div>

            <div className="search_div">
                <div className="search_bar">
                    <input type="text" placeholder="Serch" />
                    <img
                        className="img_search"
                        src={searchIcon}
                        alt="search-icon"
                    />
                </div>
            </div>
        </div>
    );
}
export default Hero;
