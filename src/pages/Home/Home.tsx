import {
  PaperClipOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Contacts from "../../components/contacts/Contacts";
import Post from "../../components/post/Post";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.homefeed}>
      <section className={styles.feed}>
        <div className={styles.posts}>
          <div className={styles.publish}>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <img src="./avatars/avatar-admin.jpg" alt="avatar" />
              </div>
              <div className={styles.send}>
                <input type="text" placeholder="What's happening?" />
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.access}>
                <div className={styles.option}>
                  <VideoCameraOutlined />
                  <div className={styles.name}>Live Video</div>
                </div>
                <div className={styles.option}>
                  <PaperClipOutlined />
                  <div className={styles.name}>Photo/Video</div>
                </div>
                <div className={styles.option}>
                  <SmileOutlined />
                  <div className={styles.name}>Feeling</div>
                </div>
              </div>
              <button className={styles.postbutton}>Post</button>
            </div>
          </div>
          <div className={styles.homeposts}>
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className={styles.activity}>activities</div>
      </section>
      <section>
        <Contacts />
      </section>
    </section>
  );
};

export default Home;
