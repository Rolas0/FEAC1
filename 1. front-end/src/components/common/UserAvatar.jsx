import styles from './UserAvatar.module.scss';

function UserAvatar({ avatar }) {
    return <div className={styles.avatar}>{avatar}</div>;
}
export default UserAvatar;
