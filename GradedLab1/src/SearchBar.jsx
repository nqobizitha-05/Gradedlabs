import React from 'react';

const SearchBar = ({ searchTerm, selectedCategory, onSearchChange, onCategoryChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Accessories">Accessories</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
      </select>
    </div>
  );
};

export default SearchBar;