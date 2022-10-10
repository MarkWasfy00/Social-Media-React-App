import {
  CameraOutlined,
  EllipsisOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import styles from "./event.module.scss";

const Event = () => {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.title}>Recent Event</div>
        <EllipsisOutlined />
      </div>
      <div className={styles.body}>
        <div className={styles.event}>
          <div className={styles.about}>
            <div className={styles.topic}>
              <CameraOutlined />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>Graduation Ceremony</div>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                obcaecati ipsum laborum, facilis earum voluptatem.
              </p>
            </div>
          </div>
          <div className={styles.reaction}>
            <div className={styles.seen}>8 seen</div>
            <div className={styles.people}>
              <img src="avatars/avatar-admin.jpg" />
              <img src="avatars/avatar-admin.jpg" />
              <img src="avatars/avatar-admin.jpg" />
              <div className={styles.rest}>+9</div>
            </div>
          </div>
        </div>
        <div className={styles.event}>
          <div className={styles.about}>
            <div className={styles.topic}>
              <ReadOutlined />
            </div>
            <div className={styles.info}>
              <div className={styles.title}>Graduation Ceremony</div>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                obcaecati ipsum laborum, facilis earum voluptatem.
              </p>
            </div>
          </div>
          <div className={styles.reaction}>
            <div className={styles.seen}>8 seen</div>
            <div className={styles.people}>
              <img src="avatars/avatar-admin.jpg" />
              <img src="avatars/avatar-admin.jpg" />
              <img src="avatars/avatar-admin.jpg" />
              <div className={styles.rest}>+9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
