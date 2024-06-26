import styles from './Input.module.scss';
import classNames from 'classnames';

function Input({ className, ...props }) {
    return <input className={classNames(styles.input, className)} {...props} />;
}
export default Input;
