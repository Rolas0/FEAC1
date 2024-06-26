import Button from '../common/Button';
import './Topbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import { CreateUserLoginContext } from '../../context/UserLoginContext.jsx';
import { useContext } from 'react';
import UserAvatar from '../common/UserAvatar.jsx';
function Topbar() {
    const navigate = useNavigate();

    const { user } = useContext(CreateUserLoginContext);

    return (
        <header className="topbar">
            <div className="navigation_div">
                <Link to="/">
                    <img className="logoipsum" src="./logo.svg" alt="logo" />
                </Link>
                <nav className="navbar">
                    <ul>
                        <Link className="nav-link" to="/">
                            <li>Home</li>
                        </Link>

                        <Link className="nav-link" to="/services">
                            <li>Services</li>
                        </Link>

                        <Link className="nav-link" to="aboutus">
                            <li>About Us</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div className="register_login">
                {user ? (
                    <UserAvatar>{user.email[0]} </UserAvatar>
                ) : (
                    <Button
                        onClick={() => {
                            navigate('/login');
                        }}
                        text={'Login / Sign Up'}
                    />
                )}
            </div>
        </header>
    );
}
export default Topbar;
