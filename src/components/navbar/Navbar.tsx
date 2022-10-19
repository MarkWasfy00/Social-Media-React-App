import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import {
  AppstoreOutlined,
  TeamOutlined,
  MailOutlined,
  BellOutlined,
  GlobalOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Feed");

  const handleChange = (data: string) => {
    setSelected(data);
  };

  return (
    <>
      <nav>
        <div className={styles.slogan}>
          <div className={styles.logo}>
            <img src="/images/Logo.png" alt="Meetmax" />
          </div>
          <div className={styles.title}>Meetmax</div>
        </div>
        <div className={styles.links}>
          <ul>
            <Link
              className={`${styles.link}${
                selected === "Feed" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Feed")}
              to="/"
            >
              <AppstoreOutlined />
              <div className={styles.name}>Feed</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Community" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Community")}
              to="/my-community"
            >
              <TeamOutlined />
              <div className={styles.name}>My community</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Messages" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Messages")}
              to="/messages"
            >
              <MailOutlined />
              <div className={styles.name}>Messages</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Notification" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Notification")}
              to="/notification"
            >
              <BellOutlined />
              <div className={styles.name}>Notification</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Explore" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Explore")}
              to="/explore"
            >
              <GlobalOutlined />
              <div className={styles.name}>Explore</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Profile" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Profile")}
              to="/profile"
            >
              <UserOutlined />
              <div className={styles.name}>Profile</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Settings" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Settings")}
              to="/settings"
            >
              <SettingOutlined />
              <div className={styles.name}>Settings</div>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Logout" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Logout")}
              to="/logout"
            >
              <LogoutOutlined />
              <div className={styles.name}>Logout</div>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
