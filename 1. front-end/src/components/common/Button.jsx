import './Button.scss';
function Button({ onClick, text }) {
    return (
        <button onClick={onClick} className="reg_log_button">
            {text}
        </button>
    );
}
export default Button;
