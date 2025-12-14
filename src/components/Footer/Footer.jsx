import React from 'react';
import './Footer.css';

import { FaReact, FaHtml5, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h3 className="built-with-text">Built with:</h3>

                <div className="tech-stack">
                    <div className="tech-icon-wrapper" title="React">
                        <FaReact className="tech-icon react-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="Vite">
                        <SiVite className="tech-icon vite-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="HTML5">
                        <FaHtml5 className="tech-icon html-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="CSS3">
                        <FaCss3 className="tech-icon css-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="Node.js">
                        <FaNodeJs className="tech-icon node-icon" />
                    </div>
                </div>

                <p className="copyright-text">
                    &copy; 2025 John Christian Saporno. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
