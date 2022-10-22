import {
  PaperClipOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { useLoaderData } from "react-router-dom";
import { HomeLoader } from "../../util/api";

import Contacts from "../../components/contacts/Contacts";
import Event from "../../components/event/Event";
import Post from "../../components/post/Post";
import Suggestion from "../../components/suggestion/Suggestion";
import styles from "./home.module.scss";

const Home = () => {
  const { admin, posts, users } = useLoaderData() as HomeLoader;

  return (
    <section className={styles.homefeed}>
      <section className={styles.feed}>
        <div className={styles.posts}>
          <div className={styles.publish}>
            <div className={styles.info}>
              <div className={styles.avatar}>
                <img src={admin.avatar} alt="avatar" />
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
            {posts.map((post, key) => {
              const friends = users
                .filter((usr) => usr.name !== post.user.name)
                .slice(0, 3);
              return <Post key={key} {...post} {...admin} friends={friends} />;
            })}
          </div>
        </div>
        <div className={styles.activity}>
          <Suggestion />
          <Event />
        </div>
      </section>
      <section>
        <Contacts users={users} />
      </section>
    </section>
  );
};

export default Home;
