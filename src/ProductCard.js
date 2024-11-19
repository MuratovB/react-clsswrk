import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  let capitalizedCategory = product.category.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return (
    <div className="product-card">
      <div className="product-img-div">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-info-div">
        <div className="product-text-div">
          <p className="product-category">{capitalizedCategory}</p>
          <p className="product-title">{product.title}</p>
        </div>
        <div className="product-price-div">
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;