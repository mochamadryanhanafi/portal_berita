// src/components/NewsFilter.jsx
import React from 'react';
import PropTypes from 'prop-types';

const NewsFilter = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="news-filter">
      {categories.map(category => (
        <button
          key={category}
          className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

NewsFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default NewsFilter;