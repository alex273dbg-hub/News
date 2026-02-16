import { formateTime } from "../../helpers/formateTime";
import type { INews } from "../../interface";
import Image from "../Image/Image";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formateTime(item.published)} by {item.author}
      </p>
    </div>
  );
}

export default NewsBanner;
