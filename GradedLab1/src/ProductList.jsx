import React from "react";
import ProductItem from './ProductItem';
import "./ProductList.css";

const ProductList = ({ filteredProducts }) => {
  if (!filteredProducts.length) {
    return <p>No products found.</p>;
  }

  return (
    <ul className='product-list'>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
