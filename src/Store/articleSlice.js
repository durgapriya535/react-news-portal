import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticlesByCategory, fetchArticlesBySearch } from '../services/api';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async ({ category, page }) => {
  const articles = await fetchArticlesByCategory(category, page);
  return articles;
});

export const searchArticles = createAsyncThunk('articles/searchArticles', async (searchTerm) => {
  const articles = await fetchArticlesBySearch(searchTerm);
  return articles;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectArticles = (state) => state.articles.articles;
export const selectStatus = (state) => state.articles.status;

export default articleSlice.reducer;
