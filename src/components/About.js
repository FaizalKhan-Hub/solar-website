// pages/About.js
import React from 'react';
import '../styles/About.css'; // Import the About.css for styling

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About HARIHAR ENERGY</h1>
        <p>
        HARIHAR ENERGY is providing Energy Related services like Energy Audit, Power Quality Audit, Infrared Thermography, Thermal Audit, , PAT Consultancy, Green Building Commissioning, Electrical Safety Audit, Internet of Things, Carbon Foot Printing, etc. We have experienced team and helping the customers to manage and reduce their energy consumption.
        </p>
        <h2>Our Vision</h2>
        <p>
        We are providing complete Energy Services under one roof at a competitive price. Our team members are having more than 10 years of experience in Energy, Renewable Energy and Environmental Engineering with good Academic background
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Commitment to Sustainability</li>
          <li>Innovation in Solar Technology</li>
          <li>Customer-Centered Solutions</li>
          <li>Global Impact</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
