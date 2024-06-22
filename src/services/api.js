import axios from 'axios';

const API_KEY = 'bd76daf5a2f94da1bb460936e903cdf1';
const BASE_URL = 'https://newsapi.org/v2/';

export const fetchArticlesByCategory = async (category, page = 1) => {
  const response = await axios.get(`${BASE_URL}top-headlines`, {
    params: {
      category,
      apiKey: API_KEY,
      country: 'us',
      page,
      pageSize: 12,
    },
  });
  return response.data.articles;
};

export const fetchArticlesBySearch = async (searchTerm) => {
  const response = await axios.get(`${BASE_URL}everything`, {
    params: {
      q: searchTerm,
      apiKey: API_KEY,
      pageSize: 10,
    },
  });
  return response.data.articles;
};
