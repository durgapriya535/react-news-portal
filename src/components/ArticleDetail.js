import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read the full article</a>
    </div>
  );
};

export default ArticleDetail;
