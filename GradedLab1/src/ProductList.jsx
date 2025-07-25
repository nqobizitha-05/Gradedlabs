import React from "react";
import ProductItem from './ProductItem';

const ProductList = ({ filteredProducts }) => {
  if (!filteredProducts.length) {
    return <p>No products found.</p>;
  }

  return (
    <ul>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
