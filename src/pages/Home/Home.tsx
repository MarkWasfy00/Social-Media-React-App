import Contacts from "../../components/contacts/Contacts";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.homefeed}>
      <section className={styles.feed}>
        <div>test</div>
      </section>
      <section>
        <Contacts />
      </section>
    </section>
  );
};

export default Home;
