import styles from "./styles.module.css";

export default function Categories({
  categories,
  setSelectedCategories,
  selectedCategories,
}) {
  return (
    <div className={styles.categories}>
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
}
