import styles from "./searchbar.module.scss";

const Searchbar = () => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.searchbar}>
          <input type="text" placeholder="Search for something here..." />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>Mark Wasfy</div>
          <div className={styles.avatar}>
            <img src="/avatars/avatar-admin.jpg" alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
