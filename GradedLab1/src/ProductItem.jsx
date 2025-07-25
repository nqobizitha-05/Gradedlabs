import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>R{product.price}</p>
      <p></p>
    </li>
  );
};

export default ProductItem;