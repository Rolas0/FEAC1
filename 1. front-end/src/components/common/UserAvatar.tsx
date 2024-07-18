import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import styles from "./UserAvatar.module.scss";
import { PropsWithChildren } from "react";

interface UserAvatarProps {
  children: React.ReactNode;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ children }) => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleToggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={styles.avatar} onClick={handleToggleDropDown} ref={dropdownRef}>
      {children}
      {isDropDownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem} onClick={() => navigate(ROUTES.MY_ACCOUNT)}>
            My Account
          </div>
          <div className={styles.dropdownItem} onClick={() => navigate(ROUTES.MY_BOOKING)}>
            My Booking
          </div>
          <div className={styles.dropdownItem} onClick={() => navigate(ROUTES.LOGOUT)}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
};



export default UserAvatar;
