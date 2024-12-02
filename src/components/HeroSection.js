import React, { useEffect, useState } from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const images = [
    "https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg",
    "https://goldisolar.com/wp-content/uploads/2023/10/How-Solar-Panels-Are-Beneficial-for-the-Environment-scaled.jpg",
    "https://homescape.solar/wp-content/uploads/2022/01/HS-blog-jan-17.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds to change the image
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img
          className="hero-image"
          src={images[currentIndex]}
          alt="Solar Panel"
        />
      </div>
      <div className="hero-content">
        <h1>GreenTech Solar Panels</h1>
        <p>Affordable energy solution for your home or office</p>
        <button className="cta-button">Find Out More</button>
      </div>
    </section>
  );
}

export default HeroSection;
