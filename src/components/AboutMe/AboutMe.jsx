import React from 'react';
import './AboutMe.css';
import bunzAboutMe from '../../assets/bunz_aboutme.png';

const AboutMe = () => (
  <div className="aboutme-container">
    <div className="aboutme-left">
      <h2 className="aboutme-title">About Me</h2>
      <div className="aboutme-photo-wrapper">
        <img src={bunzAboutMe} alt="John Christian R. Saporno" className="aboutme-photo" />
      </div>
      <div className="aboutme-card">
        <span className="aboutme-card-label">I'm <b>John Christian R. Saporno</b>,</span>
        <span className="aboutme-card-desc">an IT student from <i>Zamboanga City</i>.</span>
      </div>
    </div>
    <div className="aboutme-right">
      <div className="aboutme-intro">
        <p>Hi! I'm John Chistrian R. Saporno, a dedicated Front-End Developer and UI/UX Designer. I specialize in building responsive websites using React.js, focusing on clean code, smooth interactions, and modern design. I enjoy turning ideas into real web pages that work across all devices.</p>
        <p>As a UI/UX designer, I create user-friendly layouts that look good and feel easy to use. I believe that good design is not just about how it looks it's about how it works. My goal is to deliver digital experiences that are both functional and visually appealing.</p>
      </div>
      <div className="aboutme-contact-card">
        <div className="aboutme-contact-title">GET IN TOUCH</div>
        <div className="aboutme-contact-list">
          <div className="aboutme-contact-item"><span className="aboutme-icon">📍</span>Sea Breeze, Maasin, Zamboanga City</div>
          <div className="aboutme-contact-item"><span className="aboutme-icon">📱</span>+63 993 575 0069</div>
          <div className="aboutme-contact-item"><span className="aboutme-icon">📞</span>+63 952 488 8638</div>
          <div className="aboutme-contact-item"><span className="aboutme-icon">✉️</span>bunsai090saporno@gmail.com</div>
          <div className="aboutme-contact-item"><span className="aboutme-icon">🔗</span><a href="https://github.com/bunsai090" target="_blank" rel="noopener noreferrer">https://github.com/bunsai090</a></div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe; 