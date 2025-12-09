import { formateTime } from "../../helpers/formateTime";
import Image from "../Image/Image";
import styles from "./styles.module.css";

export default function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formateTime(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}
