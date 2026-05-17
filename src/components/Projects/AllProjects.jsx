import React, { useEffect } from 'react';
import './AllProjects.css';
import { projects } from './Projects';
import { LuGithub, LuExternalLink, LuLayers, LuArrowLeft } from 'react-icons/lu';

const AllProjects = ({ onNavigate }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('#projects');
    } else {
      window.location.hash = '#projects';
    }
  };

  return (
    <div className="all-projects-container">
      {/* Grid background styling details */}
      <div className="grid-overlay"></div>
      
      <div className="all-projects-wrapper">
        {/* Navigation Back Header */}
        <div className="back-nav-header">
          <button onClick={handleBackToHome} className="back-btn-modern">
            <span className="back-btn-icon"><LuArrowLeft /></span>
            <span className="back-btn-text">Back to Home</span>
          </button>
        </div>

        {/* Page Hero Section */}
        <div className="all-projects-hero">
          <span className="hero-tag">ARCHIVE & DIRECTORY</span>
          <h1 className="hero-title">
            My <span className="highlight">Projects.</span>
          </h1>
          <p className="hero-subtitle">
            A comprehensive catalog of systems, user interfaces, and technical designs built from scratch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid-new">
          {projects.map((project, idx) => (
            <div 
              className="project-card-new" 
              key={project.title + idx}
            >
              <div className="project-card-inner">
                {/* Image Section with Scanner Effect */}
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-img-new" />
                  <div className="scanner-line"></div>
                  <div className="image-overlay-new">
                    <div className="overlay-content">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-demo-btn">
                        <LuExternalLink /> {project.buttonText || 'Live Demo'}
                      </a>
                    </div>
                  </div>
                  <div className="project-number">0{idx + 1}</div>
                </div>

                {/* Content Section */}
                <div className="project-info-new">
                  <div className="project-category">
                    <LuLayers className="category-icon" />
                    <span>{project.stack[0]?.name || 'Web App'}</span>
                  </div>
                  
                  <h3 className="project-title-new">{project.title}</h3>
                  <p className="project-description-new">{project.desc}</p>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-pills">
                    {project.stack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="tech-pill"
                        style={{ '--accent-color': tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="project-footer-new">
                    <div className="footer-line"></div>
                    <div className="footer-actions">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link-new" title="View Source">
                        <LuGithub />
                        <span>Repository</span>
                      </a>
                      <div className="status-indicator">
                        <span className="dot"></span>
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="corner-accent top-left"></div>
              <div className="corner-accent top-right"></div>
              <div className="corner-accent bottom-left"></div>
              <div className="corner-accent bottom-right"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
