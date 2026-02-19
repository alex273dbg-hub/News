import NewsByFilters from "./NewsByFilters/NewsByFilters";
import LatestNews from "./LatestNews/LatestNews";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
