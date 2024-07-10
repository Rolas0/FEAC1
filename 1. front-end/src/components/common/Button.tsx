import styles from './Button.module.scss';

interface buttonProps {
    text: String;
    onClick: any;
}

const Button = ({ onClick, text }: buttonProps) => {
    return (
        <button onClick={onClick} className={styles.reg_log_button}>
            {text}
        </button>
    );
};
export default Button;
