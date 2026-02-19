import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { INews } from "../index";
import type { IFilters } from "@/shared/interfaces";
import { PAGE_SIZE } from "@/shared/constants/constants";
import { RootState } from "@/app/appStore";

interface State {
  news: INews[];
  filters: IFilters;
}

const initialState: State = {
  news: [],
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, actions: PayloadAction<INews[]>) => {
      state.news = actions.payload;
    },
    setFilters: (
      state,
      actions: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = actions.payload;
      state.filters = {
        ...state.filters,
        [key]: value,
      };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.news;
export const selectFilters = (state: RootState) => state.news.filters;

export default newsSlice.reducer;
