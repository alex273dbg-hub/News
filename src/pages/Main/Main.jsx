import styles from "./styles.module.css";
import { getNews } from "../../api/apiNews.js";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import { PAGE_SIZE } from "../../constants/constants.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { useFilter } from "../../helpers/hooks/useFilter.js";
import LatestNews from "../../componets/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../componets/NewsByFilters/NewsByFilters.jsx";

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

  return (
    <main className={styles.main}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />

      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filter={filter}
        chengeFilter={chengeFilter}
      />
    </main>
  );
}
