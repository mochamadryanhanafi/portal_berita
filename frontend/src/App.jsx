// src/App.jsx
import React, { useState, useEffect } from 'react';
import NewsCategory from './components/NewsCategory';
import NewsFilter from './components/NewsFilter';
import newsData from './data/newsData';
import './App.css';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [categories] = useState(['all', 'teknologi', 'kesehatan', 'olahraga']);

  // Simulasi fetching data
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(item => item.category === activeCategory);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Berita Terkini</h1>
        <NewsFilter 
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      </header>
      
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <NewsCategory news={filteredNews} />
      )}
    </div>
  );
};

export default App;