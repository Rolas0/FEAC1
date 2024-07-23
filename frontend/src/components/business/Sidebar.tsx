import { PropsWithChildren } from 'react';
import styles from './Sidebar.module.scss';
import Modal from 'react-modal';

interface SidebarProps extends PropsWithChildren {
    isOpen: boolean;
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose, children }: SidebarProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Sidebar Modal"
            className={styles.modal_content}
            overlayClassName={styles.modal_overlay}
        >
            <div className={styles.sidebar}>
                <button className={styles.close_button} onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </Modal>
    );
};

export default Sidebar;
