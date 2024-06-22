import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectFavorites } from '../Store/favouriteSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

const ArticleCard = ({ article }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some((fav) => fav.url === article.url);

  const handleFavorite = () => {
    dispatch(toggleFavorite(article));
  };

  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <Link to={`/article/${encodeURIComponent(article.url)}`}>Read More</Link>
      <button onClick={handleFavorite}>
        {isFavorite ? <FontAwesomeIcon icon={fas.faStar} /> : <FontAwesomeIcon icon={far.faStar} /> }
      </button>
    </div>
  );
};

export default ArticleCard;
