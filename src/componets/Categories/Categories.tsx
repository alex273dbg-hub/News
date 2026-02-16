import { forwardRef, type ForwardedRef } from "react";
import styles from "./styles.module.css";
import type { CategoriesType } from "../../interface/index";

interface Props {
  categories: CategoriesType[];
  setSelectedCategories: (category: CategoriesType | null) => void;
  selectedCategories: CategoriesType | null;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategories, selectedCategories }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          className={!selectedCategories ? styles.active : styles.item}
          onClick={() => {
            setSelectedCategories(null);
          }}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              className={
                selectedCategories === category ? styles.active : styles.item
              }
              onClick={() => {
                setSelectedCategories(category);
              }}
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  },
);

// Categories.dispalyName = "Categories";

export default Categories;
