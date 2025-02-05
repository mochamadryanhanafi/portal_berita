// src/components/NewsItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ title, description, thumbnail, date, category }) => {
  return (
    <article className="news-card">
      <div className="card-image">
        <img 
          src={thumbnail} 
          alt={title} 
          loading="lazy"
        />
        <span className="category-badge">{category}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <time className="card-date">{new Date(date).toLocaleDateString()}</time>
        </div>
      </div>
    </article>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default NewsItem;