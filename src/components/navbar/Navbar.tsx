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

const Navbar = () => {
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
            <li>
              <AppstoreOutlined />
              <Link to="/">Feed</Link>
            </li>
            <li>
              <TeamOutlined />
              <Link to="/">My community</Link>
            </li>
            <li>
              <MailOutlined />
              <Link to="/">Messages</Link>
            </li>
            <li>
              <BellOutlined />
              <Link to="/">Notification</Link>
            </li>
            <li>
              <GlobalOutlined />
              <Link to="/">Explore</Link>
            </li>
            <li>
              <UserOutlined />
              <Link to="/">Profile</Link>
            </li>
            <li>
              <SettingOutlined />
              <Link to="/">Settings</Link>
            </li>
            <li>
              <LogoutOutlined />
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
