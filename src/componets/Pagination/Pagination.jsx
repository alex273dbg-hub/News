import { formatDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

export default function Pagination({
  totalPages,
  heandleNextPage,
  heandlePageClick,
  heandlePrevPage,
  currentPage,
}) {
  return (
    <div className={styles.pagination}>
      <button
        disabled={1 >= currentPage}
        onClick={heandlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => heandlePageClick(index + 1)}
              className={styles.pageNumber}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={heandleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
}
