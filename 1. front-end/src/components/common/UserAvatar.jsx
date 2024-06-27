import styles from './UserAvatar.module.scss';

const UserAvatar = ({ avatar }) => {
    return <div className={styles.avatar}>{avatar}</div>;
};

export default UserAvatar;
