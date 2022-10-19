import {
  CommentOutlined,
  EllipsisOutlined,
  HeartOutlined,
  RightOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { UserType } from "../../data/users";
import styles from "./post.module.scss";

type PostProps = {
  user: UserType;
  images: string[];
  description: string;
  name: string;
  avatar: string;
};

const Post = ({ user, images, description, name, avatar }: PostProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className={styles.title}>
          <div className={styles.name}>{user.name}</div>
          <div className={styles.time}>15h ago</div>
        </div>
        <EllipsisOutlined />
      </div>
      <div className={styles.post}>
        <p className={styles.about}>{description}</p>
        <div className={styles.images}>
          {images.map((img) => {
            return <img key={img} src={img} alt="post" />;
          })}
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
        <img src={avatar} alt="avatar" />
        <input type="text" placeholder="Write a comment..." />
        <RightOutlined />
      </div>
    </div>
  );
};

export default Post;
