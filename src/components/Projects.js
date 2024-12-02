import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Solar Farm</h3>
          <p>Developed a 50 MW solar farm to provide clean energy to local communities.</p>
        </div>
        <div className="project-card">
          <h3>Rooftop Solar Panels</h3>
          <p>Installed over 200 rooftop solar panel systems for residential clients.</p>
        </div>
        <div className="project-card">
          <h3>Corporate Solar Solutions</h3>
          <p>Partnered with businesses to transition to sustainable energy solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
