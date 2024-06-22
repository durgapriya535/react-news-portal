import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticles } from '../Store/articleSlice';
import ArticleDetail from '../components/ArticleDetail';

const ArticlePage = () => {
  const { url } = useParams();
  const articles = useSelector(selectArticles);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const selectedArticle = articles.find((article) => article.url === decodeURIComponent(url));
    setArticle(selectedArticle);
  }, [url, articles]);

  return (
    <div className="article-page">
      {article ? <ArticleDetail article={article} /> : <p>Loading...</p>}
    </div>
  );
};

export default ArticlePage;
