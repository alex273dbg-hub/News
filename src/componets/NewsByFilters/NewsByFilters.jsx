import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilter } from "../../helpers/hooks/useFilter";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrtapper from "../PaginationWrtapper/PaginationWrtapper";
import styles from "./styles.module.css";

export default function NewsByFilters() {
  const { filter, chengeFilter } = useFilter({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filter.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filter,
    keywords: debouncedKeywords,
  });

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

      <PaginationWrtapper
        totalPages={TOTAL_PAGES}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={filter.page_number}
        top
        bottom
      >
        <NewsList news={data?.news} isLoading={isLoading} />
      </PaginationWrtapper>
    </section>
  );
}
