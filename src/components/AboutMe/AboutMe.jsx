import React from 'react';
import './AboutMe.css';
import bunzAboutMe from '../../assets/bunz_aboutme.png';

const iconStyle = {
  width: '1.25em',
  height: '1.25em',
  verticalAlign: 'middle',
  marginRight: '0.5em',
  fill: '#bcbcbc',
  flexShrink: 0,
};

const AboutMe = (props) => (
  <div className="aboutme-container" id="aboutme">
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
        <p>Hi! I'm John Chistrian R. Saporno, a dedicated Front-End Developer and UI/UX Designer. I specialize in building websites using React.js, focusing on clean code, smooth interactions, and modern design. I enjoy turning ideas into real web pages that work across all devices.</p>
        <p>As a UI/UX designer, I create user-friendly layouts that look good and feel easy to use. I believe that good design is not just about how it looks it's about how it works. My goal is to deliver digital experiences that are both functional and visually appealing.</p>
      </div>
      <div className="aboutme-contact-card">
        <div className="aboutme-contact-title">GET IN TOUCH</div>
        <div className="aboutme-contact-list">
          <div className="aboutme-contact-item">
            <span className="aboutme-icon">
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </span>
            Sea Breeze, Maasin, Zamboanga City
          </div>
          <div className="aboutme-contact-item">
            <span className="aboutme-icon">
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
            </span>
            +63 993 575 0069
          </div>
          <div className="aboutme-contact-item">
            <span className="aboutme-icon">
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2zm0 2v.01L12 9 7 4.01V4h10zM7 20V6.83l5 5 5-5V20H7z"/></svg>
            </span>
            +63 952 488 8638
          </div>
          <div className="aboutme-contact-item">
            <span className="aboutme-icon">
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.83l8 6.67 8-6.67V20H4z"/></svg>
            </span>
            bunsai090saporno@gmail.com
          </div>
          <div className="aboutme-contact-item">
            <span className="aboutme-icon">
              <svg style={iconStyle} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.87 8.81 8.65 9.72.63.12.86-.27.86-.6v-2.17c-3.51.76-4.25-1.49-4.25-1.49-.57-1.44-1.39-1.83-1.39-1.83-1.14-.78.09-.76.09-.76 1.26.09 1.92 1.3 1.92 1.3 1.12 1.92 2.94 1.37 3.66 1.05.11-.81.44-1.37.8-1.69-2.8-.32-5.74-1.4-5.74-6.22 0-1.37.49-2.49 1.29-3.37-.13-.32-.56-1.6.12-3.33 0 0 1.06-.34 3.48 1.29a12.1 12.1 0 013.17-.43c1.08.01 2.17.15 3.17.43 2.42-1.63 3.48-1.29 3.48-1.29.68 1.73.25 3.01.12 3.33.8.88 1.29 2 1.29 3.37 0 4.83-2.95 5.9-5.76 6.22.45.39.85 1.16.85 2.34v3.47c0 .33.23.72.87.6C18.13 20.81 22 16.84 22 12c0-5.52-4.48-10-10-10z"/></svg>
            </span>
            <a href="https://github.com/bunsai090" target="_blank" rel="noopener noreferrer">https://github.com/bunsai090</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe; 