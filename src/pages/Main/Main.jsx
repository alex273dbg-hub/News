import { useEffect, useState } from "react";
import NewsBanner from "../../componets/NewsBasnner/NewsBanner";
import styles from "./styles.module.css";
import { getNews, getCategories } from "../../api/apiNews.js";
import NewsList from "../../componets/NewsList/NewsList.jsx";
import Skeleton from "../../componets/Skeleton/Skeleton.jsx";
import Pagination from "../../componets/Pagination/Pagination.jsx";
import Categories from "../../componets/Categories/Categories.jsx";

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategories === "All" ? null : selectedCategories,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategories]);

  function heandleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function heandlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function heandlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      <Pagination
        totalPages={totalPages}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={currentPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}

      <Pagination
        totalPages={totalPages}
        heandleNextPage={heandleNextPage}
        heandlePageClick={heandlePageClick}
        heandlePrevPage={heandlePrevPage}
        currentPage={currentPage}
      />
    </main>
  );
}
