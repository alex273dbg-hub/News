import styles from "./styles.module.css";

export default function Categories({
  categories,
  setSelectedCategories,
  selectedCategories,
}) {
  return (
    <div className={styles.categories}>
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
}
