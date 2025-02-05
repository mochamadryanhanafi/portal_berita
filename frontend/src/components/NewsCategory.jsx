// src/components/NewsCategory.jsx
import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsCategory = ({ news }) => {
  return (
    <div className="news-grid">
      {news.map(item => (
        <NewsItem
          key={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
          date={item.date}
          category={item.category}
        />
      ))}
    </div>
  );
};

NewsCategory.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsCategory;