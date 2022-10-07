import {
  CommentOutlined,
  EllipsisOutlined,
  HeartOutlined,
  RightOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import styles from "./post.module.scss";

const Post = () => {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src="/avatars/avatar-admin.jpg" alt="avatar" />
        </div>
        <div className={styles.title}>
          <div className={styles.name}>Mark Wasfy</div>
          <div className={styles.time}>15h ago</div>
        </div>
        <EllipsisOutlined />
      </div>
      <div className={styles.post}>
        <p className={styles.about}>Was a really good picture by me</p>
        <div className={styles.images}>
          <img src="/images/post.jpg" alt="post" />
        </div>
      </div>
      <div className={styles.reactions}>
        <div className={styles.people}>
          <div className={styles.react}>
            <img src="/avatars/avatar-admin.jpg" alt="avatar" />
          </div>
          <div className={styles.react}>
            <img src="/avatars/avatar-admin.jpg" alt="avatar" />
          </div>
          <div className={styles.react}>
            <img src="/avatars/avatar-admin.jpg" alt="avatar" />
          </div>
          <div className={styles.counter}>+9</div>
        </div>
        <div className={styles.related}>
          <div className={styles.comment}>3 comments</div>
          <div className={styles.share}>17 share</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.interact}>
          <button>
            <HeartOutlined />
            Like
          </button>
        </div>
        <div className={styles.interact}>
          <button>
            <CommentOutlined />
            Comments
          </button>
        </div>
        <div className={styles.interact}>
          <button>
            <ShareAltOutlined />
            share
          </button>
        </div>
      </div>
      <div className={styles.send}>
        <img src="/avatars/avatar-admin.jpg" alt="avatar" />
        <input type="text" placeholder="Write a comment..." />
        <RightOutlined />
      </div>
    </div>
  );
};

export default Post;
