import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <h2 className="hero-greeting">Hello It’s Me</h2>
    <h1 className="hero-name">John Christian</h1>
    <h3 className="hero-title">And I’m a <span>Fronted Developer</span></h3>
    <p className="hero-desc">
      I create responsive and interactive web interfaces using React.js. I turn design ideas into functional web pages with clean layouts and smooth user experience.
    </p>
    <div className="hero-actions">
      <button className="hero-btn primary">Get Touch</button>
      <button className="hero-btn secondary">View my Work</button>
    </div>
  </section>
);

export default Hero; 