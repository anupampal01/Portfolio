import React from 'react';
import '../index.css'; // Import external CSS file

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="./image(anupam).jpeg"
          alt="Anupam Pal"
          className="hero-image"
        />
        
        <h1 className="hero-heading">
          Hello, I'm <span className="highlighted-name">Anupam Pal</span>
        </h1>
        
        <p className="hero-subtitle">
          🚀 Full Stack Developer | MERN Stack Enthusiast
        </p>
        
        <a href="/resume.pdf" download>
          <button className="hero-button">
            <span role="img" aria-label="Resume">📄</span> Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;