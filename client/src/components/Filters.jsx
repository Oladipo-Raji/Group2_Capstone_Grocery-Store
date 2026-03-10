import React, { useState } from 'react';
import './Filters.css'; // we'll add styles below

const Filter = () => {
  const [priceRange, setPriceRange] = useState(25); // default middle value

  const categories = [
    'Vegetables',
    'Fruits',
    'Herbs & Seasonings',
    'Dairy Products',
    'Beverages',
    'Snacks & Biscuits',
    'Home Cleaning',
  ];

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleClearFilters = () => {
    setPriceRange(25);
    // If you later add checked state for categories, reset them here too
    document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.checked = false;
    });
  };

  return (
    <div className="filters-container">
      <h2>Filters</h2>

      <div className="filter-section">
        <h3>Categories</h3>
        <div className="categories-list">
          {categories.map((category) => (
            <label key={category} className="checkbox-label">
              <input type="checkbox" id={category.replace(/\s+/g, '-')} />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3>Price Range</h3>
        <div className="price-slider-container">
          <input
            type="range"
            min="0"
            max="50"
            value={priceRange}
            onChange={handlePriceChange}
            className="price-slider"
          />
          <div className="price-labels">
            <span>$0</span>
            <span>${priceRange}</span>
            <span>$50</span>
          </div>
        </div>
      </div>

      <button className="clear-btn" onClick={handleClearFilters}>
        Clear All Filters
      </button>
    </div>
  );
};

export default Filter;