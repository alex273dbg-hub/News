import styles from "./styles.module.css";
import LatestNews from "../../componets/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../componets/NewsByFilters/NewsByFilters.jsx";

export default function Main() {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
}
