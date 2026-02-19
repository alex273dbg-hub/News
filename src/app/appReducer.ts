import { categoriesApi } from "@/entities/category/api/categoriesApi";
import { newsApi } from "@/entities/news/api/newsApi";
import news from "@/entities/news/model/newsSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  news,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
