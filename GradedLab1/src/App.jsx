import React, { useState } from 'react';
import './App.css';
import { products } from './Products';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import ProductItem from './ProductItem';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesStock = inStockOnly ? product.inStock : true;
    return matchesName && matchesCategory && matchesStock;
  });

  return (
    <div>
      <h1>Product Catalog</h1>
      <SearchBar
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        inStockOnly={inStockOnly}
        onSearchChange={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        onInStockChange={setInStockOnly}
      />
      <ProductList filteredProducts={filteredProducts} />
    </div>
  );
};





export default App
