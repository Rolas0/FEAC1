import Button from '../common/Button';
import styles from './Topbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { CreateUserLoginContext } from '../../context/UserLoginContext';
import { useContext } from 'react';
import UserAvatar from '../common/UserAvatar';

const Topbar = () => {
    const navigate = useNavigate();

    const { user } = useContext(CreateUserLoginContext);

    return (
        <header className={styles.topbar}>
            <div className={styles.navigation_div}>
                <Link to="/">
                    <img
                        className={styles.logoipsum}
                        src="./logo.svg"
                        alt="logo"
                    />
                </Link>
                <nav className={styles.navbar}>
                    <ul>
                        <Link className={styles.nav_link} to="/">
                            <li>Home</li>
                        </Link>

                        <Link className={styles.nav_link} to="/services">
                            <li>Services</li>
                        </Link>

                        <Link className={styles.nav_link} to="aboutus">
                            <li>About Us</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className={styles.register_login}>
                {user ? (
                    <UserAvatar children={user.email[0]} />
                ) : (
                    <Button
                        onClick={() => {
                            navigate('/login');
                        }}
                        text="Login / Sign Up"
                    />
                )}
            </div>
        </header>
    );
};

export default Topbar;
