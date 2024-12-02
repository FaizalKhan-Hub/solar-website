// pages/Product.js
import React from 'react';
import '../styles/Product.css'; // Import the Product.css for styling

function Product() {
  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Our GreenTech Products</h1>
        <p>GreenTech offers a wide range of innovative and efficient solar energy solutions to meet your needs. Our products are designed to provide reliable, clean, and affordable energy for your home or business.</p>
      </div>
      
      <div className="product-grid">
        <div className="product-item">
          <img 
            src="https://via.placeholder.com/500x300?text=Solar+Panels" 
            alt="Solar Panels" 
            className="product-image"
          />
          <h2>Solar Panels</h2>
          <p>Our high-efficiency solar panels are designed to maximize energy production, ensuring that your home or business gets the most out of every ray of sunlight.</p>
        </div>

        <div className="product-item">
          <img 
            src="https://via.placeholder.com/500x300?text=Solar+Pumps" 
            alt="Solar Pumps" 
            className="product-image"
          />
          <h2>Solar Pumps</h2>
          <p>GreenTech solar pumps provide an eco-friendly solution for agricultural irrigation, water supply, and more. Powered by the sun, these pumps help reduce energy costs and environmental impact.</p>
        </div>

        <div className="product-item">
          <img 
            src="https://via.placeholder.com/500x300?text=Rooftop+Solar" 
            alt="Rooftop Solar" 
            className="product-image"
          />
          <h2>Rooftop Solar Systems</h2>
          <p>Our rooftop solar systems are perfect for both residential and commercial applications. With easy installation and long-term durability, they provide a sustainable energy solution for your property.</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
