import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { type CategoriesApiResponse, type IFilters } from "../../interface";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import styles from "./styles.module.css";

interface Props {
  filter: IFilters;
  chengeFilter: (key: string, value: string | number | null) => void;
}

export default function NewsFilters({ filter, chengeFilter }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories,
  );

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
