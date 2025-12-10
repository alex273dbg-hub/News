import NewsBanner from "../../componets/NewsBasnner/NewsBanner";
import styles from "./styles.module.css";
import { getNews, getCategories } from "../../api/apiNews.js";
import NewsList from "../../componets/NewsList/NewsList.jsx";
import Pagination from "../../componets/Pagination/Pagination.jsx";
import Categories from "../../componets/Categories/Categories.jsx";
import Search from "../../componets/Search/Search.jsx";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import { TOTAL_PAGES, PAGE_SIZE } from "../../constants/constants.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { useFilter } from "../../helpers/hooks/useFilter.js";

export default function Main() {
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

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategories={filter.category}
          setSelectedCategories={(category) =>
            chengeFilter("category", category)
          }
        />
      ) : null}

      <Search
        keywords={filter.keywords}
        setKeywords={(keywords) => chengeFilter("keywords", keywords)}
      />

      <NewsBanner
        item={data && data.news && data.news[0]}
        isLoading={isLoading}
      />

      <Pagination
        totalPages={TOTAL_PAGES}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={filter.page_number}
      />

      <NewsList news={data?.news} isLoading={isLoading} />

      <Pagination
        totalPages={TOTAL_PAGES}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={filter.page_number}
      />
    </main>
  );
}
