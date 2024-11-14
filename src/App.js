import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.js';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);
  
  return (
    <div className="app-container">
      <h1>Список товаров</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;