import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons";
import styles from "./suggestion.module.scss";

const Suggestion = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.title}>You Might Like</div>
        <div className={styles.more}>See All</div>
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <div className={styles.avatar}>
            <img src="/avatars/avatar-admin.jpg" alt="avatar" />
          </div>
          <div className={styles.contact}>
            <div className={styles.name}>Mark Wasfy</div>
            <div className={styles.work}>Founder & CEO at Trophy</div>
            <div className={styles.social}>
              <FacebookOutlined />
              <TwitterOutlined />
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.ignore}>Ignore</button>
          <button className={styles.follow}>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
