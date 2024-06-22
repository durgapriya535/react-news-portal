import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles, selectStatus, searchArticles } from '../Store/articleSlice';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const articles = useSelector(selectArticles);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles({ category, page: currentPage }));
  }, [category, currentPage, dispatch]);

  const handleSearch = (searchTerm) => {
    dispatch(searchArticles(searchTerm));
  };

  return (
    <div className="home-page">
      <Navbar
        categories={['general', 'business', 'technology', 'entertainment']}
        selectedCategory={category}
        onCategoryChange={setCategory}
        onSearch={handleSearch}
      />
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load articles</p>}
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(articles.length / 10)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;
