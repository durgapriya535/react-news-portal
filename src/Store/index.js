import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import favoriteReducer from './favouriteSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    favorites: favoriteReducer,
  },
});
