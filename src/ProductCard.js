import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  let capitalizedCategory = product.category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-category">{capitalizedCategory}</p>
      <p className="product-title">{product.title}</p>
      <div className="product-price-div">
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;