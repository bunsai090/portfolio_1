import React from 'react';
import './Footer.css';
import { FaReact, FaCss3Alt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVite, SiJavascript, SiVercel } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-glow"></div>
      <div className="footer-content-modern">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Bunz <span>dev</span></h2>
            <p>Building digital experiences with modern web technologies and futuristic designs.</p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/bunsai090" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-tech-stack">
            <span className="tech-label">Engineered With</span>
            <div className="tech-icons-container">
              <div className="tech-badge" title="React 19">
                <FaReact className="t-icon react" />
              </div>
              <div className="tech-badge" title="Vite">
                <SiVite className="t-icon vite" />
              </div>
              <div className="tech-badge" title="JavaScript">
                <SiJavascript className="t-icon js" />
              </div>
              <div className="tech-badge" title="CSS3">
                <FaCss3Alt className="t-icon css" />
              </div>
              <div className="tech-badge" title="Vercel">
                <SiVercel className="t-icon vercel" />
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} John Christian Saporno. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
