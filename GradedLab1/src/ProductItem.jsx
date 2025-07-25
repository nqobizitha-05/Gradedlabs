import React from 'react';
const ProductItem = ({ product }) => {
  return (
    <li className='product-card'>
      <h3 className='product-name'>{product.name}</h3>
      <div className='product-details'>
        <p>{product.category}</p>
        <p className='product-price'>R{product.price}</p>
        <p className={product.inStock ? 'product-stock' : 'out-of-stock'}>{product.inStock ? "In stock" : "Out of stock"}</p>
      </div>
    </li>
  );
};

export default ProductItem;