import { EllipsisOutlined } from "@ant-design/icons";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.search}>
        <input type="text" placeholder="Search Friends !" />
      </div>
      <div className={styles.friends}>
        <div className={styles.config}>
          <div className={styles.title}>Friends</div>
          <EllipsisOutlined />
        </div>
        <div className={styles.chat}>
          <ul>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
            <li>
              <div className={styles.avatar}>
                <img src="/avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.name}>Mark Wasfy</div>
              <div className={styles.status}>online</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
