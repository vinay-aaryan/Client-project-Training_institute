import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Discover our successful projects and client transformations</p>
        </div>
      </section>
      
      <section className="portfolio-grid">
        <div className="container">
          <div className="portfolio-items">
            {/* Portfolio items will be added here */}
            <div className="portfolio-item">
              <h3>Coming Soon</h3>
              <p>Our portfolio is being updated with our latest projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 