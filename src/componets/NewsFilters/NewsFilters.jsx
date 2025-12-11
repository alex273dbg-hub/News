import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

export default function NewsFilters({ filter, chengeFilter }) {
  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategories={filter.category}
            setSelectedCategories={(category) =>
              chengeFilter("category", category)
            }
          />
        </Slider>
      ) : null}

      <Search
        keywords={filter.keywords}
        setKeywords={(keywords) => chengeFilter("keywords", keywords)}
      />
    </div>
  );
}
