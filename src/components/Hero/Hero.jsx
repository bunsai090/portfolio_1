import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleGetTouch = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h2 className="hero-greeting">Hello It’s Me</h2>
      <h1 className="hero-name">John Christian</h1>
      <h3 className="hero-title">And I’m a <span>UI/UX Designer</span></h3>
      <p className="hero-desc">
        I create interactive web interfaces using React.js. I turn design ideas into functional web pages with clean layouts and smooth user experience.
      </p>
      <div className="hero-actions">
        <button className="hero-btn primary" onClick={handleGetTouch}>Get Touch</button>
        <button className="hero-btn secondary" onClick={handleViewWork}>View my Work</button>
      </div>
    </section>
  );
};

export default Hero; 