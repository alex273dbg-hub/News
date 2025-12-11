import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

export default function NewsByFilters({
  filter,
  chengeFilter,
  isLoading,
  news,
}) {
  function heandleNextPage() {
    if (filter.page_number < TOTAL_PAGES) {
      chengeFilter("page_number", filter.page_number + 1);
    }
  }

  function heandlePageClick(pageNumber) {
    chengeFilter("page_number", pageNumber);
  }

  function heandlePrevPage() {
    if (filter.page_number > 1) {
      chengeFilter("page_number", filter.page_number - 1);
    }
  }

  return (
    <section className={styles.section}>
      <NewsFilters filter={filter} chengeFilter={chengeFilter} />

      <Pagination
        totalPages={TOTAL_PAGES}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={filter.page_number}
      />

      <NewsList news={news} isLoading={isLoading} />

      <Pagination
        totalPages={TOTAL_PAGES}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={filter.page_number}
      />
    </section>
  );
}
