import Input from '../components/common/Input';
import styles from './Login.module.scss';

function Login() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h2 className={styles.title}>Login</h2>
                <Input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    required
                />
                <Input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    required
                />

                <button className={styles.button}>Log in</button>
            </form>
        </div>
    );
}
export default Login;
