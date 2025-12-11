import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";

export default function NewsFilters({ filter, chengeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
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
    </div>
  );
}
