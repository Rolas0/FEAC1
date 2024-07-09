import styles from './UserAvatar.module.scss';
import { PropsWithChildren } from 'react';

const UserAvatar = ({ children }: PropsWithChildren) => {
    return <div className={styles.avatar}>{children}</div>;
};

export default UserAvatar;
