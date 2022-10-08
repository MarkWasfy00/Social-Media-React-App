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
            <img src="/images/Logo.png" alt="GreenLife" />
          </div>
          <div className={styles.title}>GreenLife</div>
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
              <a>Feed</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Community" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Community")}
              to="/my-community"
            >
              <TeamOutlined />
              <a>My community</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Messages" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Messages")}
              to="/messages"
            >
              <MailOutlined />
              <a>Messages</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Notification" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Notification")}
              to="/notification"
            >
              <BellOutlined />
              <a>Notification</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Explore" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Explore")}
              to="/explore"
            >
              <GlobalOutlined />
              <a>Explore</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Profile" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Profile")}
              to="/profile"
            >
              <UserOutlined />
              <a>Profile</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Settings" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Settings")}
              to="/settings"
            >
              <SettingOutlined />
              <a>Settings</a>
            </Link>
            <Link
              className={`${styles.link}${
                selected === "Logout" ? ` ${styles.activelink}` : ""
              }`}
              onClick={() => handleChange("Logout")}
              to="/logout"
            >
              <LogoutOutlined />
              <a>Logout</a>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
