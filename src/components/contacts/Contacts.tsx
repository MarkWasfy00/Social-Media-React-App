import { EllipsisOutlined } from "@ant-design/icons";
import { useState } from "react";
import { UserType } from "../../data/users";
import styles from "./contacts.module.scss";

type ContactsProps = {
  users: UserType[];
};

const Contacts = ({ users }: ContactsProps) => {
  const [search, setSearch] = useState("");
  const filterUsers = users.filter((usr) =>
    usr.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.contacts}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search Friends !"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.friends}>
        <div className={styles.config}>
          <div className={styles.title}>Friends</div>
          <EllipsisOutlined />
        </div>
        <div className={styles.chat}>
          <ul>
            {filterUsers.map((user) => {
              return (
                <li key={user.name}>
                  <div className={styles.avatar}>
                    <img src={user.avatar} alt="avatar" />
                  </div>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.status}>
                    {user.online ? (
                      <div className={styles.online}></div>
                    ) : (
                      <div className={styles.offline}>10min</div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
