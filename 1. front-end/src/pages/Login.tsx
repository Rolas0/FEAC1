import { useState, useContext } from 'react';
import Input from '../components/common/Input';
import styles from './Login.module.scss';
import { CreateUserLoginContext } from '../context/UserLoginContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(CreateUserLoginContext);
    const navigate = useNavigate();

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
        login({ email, password });
        navigate('/');
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleLoginSubmit} className={styles.form}>
                <h2 className={styles.title}>Login</h2>
                <Input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className={styles.button}>Log in</button>
            </form>
        </div>
    );
};

export default Login;
