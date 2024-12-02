// pages/Blog.js
import React from 'react';
import '../styles/Blog.css'; // Import the CSS for styling

function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Our Work Sites</h1>
        <p>Explore the projects we've completed around the country. We take pride in delivering top-quality solar solutions to residential and commercial clients.</p>
      </div>

      <div className="blog-posts">
        <div className="blog-post">
          <img
            src="https://via.placeholder.com/600x400?text=Site+1"
            alt="Work Site 1"
            className="blog-image"
          />
          <h2>Residential Solar Installation in Springfield</h2>
          <p>We installed a high-efficiency solar panel system for a residential client in Springfield. This project helped reduce their energy bills by 50% and increased their home’s value.</p>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-post">
          <img
            src="https://via.placeholder.com/600x400?text=Site+2"
            alt="Work Site 2"
            className="blog-image"
          />
          <h2>Commercial Solar Project in Downtown City</h2>
          <p>Our team completed a large-scale solar installation for a commercial property in Downtown City, helping the business cut its energy costs and reduce its carbon footprint.</p>
          <button className="read-more">Read More</button>
        </div>

        <div className="blog-post">
          <img
            src="https://via.placeholder.com/600x400?text=Site+3"
            alt="Work Site 3"
            className="blog-image"
          />
          <h2>Rooftop Solar Panels for City Hall</h2>
          <p>We were honored to provide solar panel installation on the rooftop of the City Hall building, which now powers the building with clean, renewable energy.</p>
          <button className="read-more">Read More</button>
        </div>

        {/* Add more blog posts here */}
      </div>
    </div>
  );
}

export default Blog;
