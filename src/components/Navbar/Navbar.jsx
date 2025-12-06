import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('aboutme');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      const scrollY = window.scrollY;

      // Update scroll state for glassmorphism effect
      setIsScrolled(scrollY > 50);

      const aboutTop = aboutSection ? aboutSection.offsetTop - 100 : 0;
      const skillsTop = skillsSection ? skillsSection.offsetTop - 100 : 0;
      const projectsTop = projectsSection ? projectsSection.offsetTop - 100 : 0;
      const contactTop = contactSection ? contactSection.offsetTop - 100 : 0;
      if (scrollY >= contactTop) {
        setActiveSection('contact');
      } else if (scrollY >= projectsTop) {
        setActiveSection('projects');
      } else if (scrollY >= skillsTop) {
        setActiveSection('skills');
      } else if (scrollY >= aboutTop) {
        setActiveSection('aboutme');
      } else {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation (mobile)
  const handleNavClick = (section, e) => {
    setActiveSection(section);
    setMenuOpen(false);
    if (section === 'home') {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
      <div className="navbar-logo">
        <span>Bunz</span> dev
      </div>
      <div
        className="navbar-hamburger"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        tabIndex={0}
        role="button"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="32" height="3" rx="1.5" fill="#bcbcbc" />
          <rect y="15" width="32" height="3" rx="1.5" fill="#bcbcbc" />
          <rect y="23" width="32" height="3" rx="1.5" fill="#bcbcbc" />
        </svg>
      </div>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => handleNavClick('home', e)}>Home</a></li>
        <li><a href="#aboutme" className={activeSection === 'aboutme' ? 'active' : ''} onClick={() => handleNavClick('aboutme')}>About</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleNavClick('skills')}>Skills</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>
        <li className="navbar-github-mobile">
          <a href="https://github.com/bunsai090" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#bcbcbc" />
            </svg>
          </a>
        </li>
      </ul>
      <a href="https://github.com/bunsai090" className="navbar-github navbar-github-desktop" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#bcbcbc" />
        </svg>
      </a>
    </nav>
  );
};

export default Navbar; 