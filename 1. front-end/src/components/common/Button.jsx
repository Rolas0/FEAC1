import styles from './Button.module.scss';
const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className={styles.reg_log_button}>
            {text}
        </button>
    );
};
export default Button;
