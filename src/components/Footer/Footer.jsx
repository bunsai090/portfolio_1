import React from 'react';
import './Footer.css';

// Import Icons
import reactIcon from '../../assets/react.svg';
import viteIcon from '../../assets/VITE.png';
import htmlIcon from '../../assets/html.png';
import cssIcon from '../../assets/css-3.png';
import nodeIcon from '../../assets/nodejs.png'; // Using Node as part of the stack
// If you want JS, we can just use Node, or maybe generic if needed. Node is good.

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h3 className="built-with-text">Built with:</h3>

                <div className="tech-stack">
                    <div className="tech-icon-wrapper" title="React">
                        <img src={reactIcon} alt="React" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="Vite">
                        <img src={viteIcon} alt="Vite" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="HTML5">
                        <img src={htmlIcon} alt="HTML5" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="CSS3">
                        <img src={cssIcon} alt="CSS3" className="tech-icon" />
                    </div>
                    <div className="tech-icon-wrapper" title="Node.js">
                        <img src={nodeIcon} alt="Node.js" className="tech-icon" />
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
