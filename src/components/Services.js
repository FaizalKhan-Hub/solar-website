// pages/Services.js
import React from 'react';
import '../styles/Services.css'; // Import the Services.css for styling

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our GreenTech Services</h1>
        <p>We offer a variety of solar energy solutions, ranging from consultation and design to installation and maintenance. Our team is dedicated to delivering high-quality, reliable solar services for your home or business.</p>
      </div>

      <div className="services-grid">
        <div className="service-item">
          <img
            src="https://via.placeholder.com/500x300?text=Installation"
            alt="Solar Installation"
            className="service-image"
          />
          <h2>Solar Panel Installation</h2>
          <p>Our expert installation team ensures that your solar panels are installed efficiently and safely, optimizing energy production for your property.</p>
        </div>

        <div className="service-item">
          <img
            src="https://via.placeholder.com/500x300?text=Maintenance"
            alt="Solar Panel Maintenance"
            className="service-image"
          />
          <h2>Maintenance & Repair</h2>
          <p>We offer ongoing maintenance services to ensure that your solar panels and system are performing at their best, as well as any necessary repairs.</p>
        </div>

        <div className="service-item">
          <img
            src="https://via.placeholder.com/500x300?text=Consultation"
            alt="Solar Consultation"
            className="service-image"
          />
          <h2>Consultation & Design</h2>
          <p>Our expert consultants help you design a custom solar solution tailored to your needs, ensuring maximum efficiency and cost savings.</p>
        </div>

        <div className="service-item">
          <img
            src="https://via.placeholder.com/500x300?text=Energy+Storage"
            alt="Energy Storage"
            className="service-image"
          />
          <h2>Energy Storage Solutions</h2>
          <p>We provide advanced energy storage solutions, enabling you to store excess solar power for use when you need it most, day or night.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
