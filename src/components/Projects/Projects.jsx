import React from 'react';
import './Projects.css';
import personalWebsite from '../../assets/personal website.png';
import studentManagement from '../../assets/student_management_system.png';
import orderingManagement from '../../assets/ordering management system.png';
import executiveDashboard from '../../assets/executive dashboard.png';
import assetLink from '../../assets/Asset & Maintenance Management System With QR-CODe.png';
import azxTech from '../../assets/AzxTech IT Solution.png';



const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8.59V13a1 1 0 1 1-2 0V8.59l-5.3 5.3a1 1 0 0 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.42L18 8.59z" fill="#ffffff"/>
    <path d="M5 19a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v13h13a1 1 0 1 1 0 2H5z" fill="#ffffff"/>
  </svg>
);

export const projects = [
  {
    image: azxTech,
    title: 'AzxTech IT Solutions',
    desc: 'Internship/OJT experience collaborating on Frontend and UI/UX development. Served as the final task to create the company website showcasing modern technology solutions.',
    stack: [
      { name: 'React', color: '#61dafb' },
      { name: 'Vite', color: '#646cff' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
      { name: 'JavaScript', color: '#f7df1e' },
    ],
    live: 'https://axztechitsolutions.dev/',
    github: '#',
  },
  {
    image: assetLink,
    title: 'School Asset & Maintenance Management System With QR-CODE',
    desc: 'SwiftMaintenance is a digital maintenance system for educational institutions that uses QR-code technology to connect classroom issue reporting with facility management for faster and more efficient maintenance processes.',
    stack: [
      { name: 'React 18', color: '#61dafb' },
      { name: 'Vite', color: '#646cff' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
      { name: 'Firebase v12', color: '#ffca28' },
      { name: 'TanStack Query', color: '#ff4154' },
      { name: 'Framer Motion', color: '#00d8ff' },
      { name: 'GSAP', color: '#88ce02' },
      { name: 'Recharts', color: '#22c55e' },
      { name: 'Shadcn UI', color: '#ffffff' },
    ],

    live: 'https://github.com/bunsai090/-AssetLink-School-Asset-Management-System-with-QR-Code-Enabled-Repair-Tracking-',
    github: 'https://github.com/bunsai090/-AssetLink-School-Asset-Management-System-with-QR-Code-Enabled-Repair-Tracking-',
  },
  {
    image: personalWebsite,

    title: 'Personal Website',
    desc: 'A passionate and driven developer showcasing projects in web development, UI/UX design, and system implementation',
    stack: [
      { name: 'React 19', color: '#61dafb' },
      { name: 'Vite', color: '#646cff' },
      { name: 'Vanilla CSS', color: '#1572B6' },
      { name: 'EmailJS', color: '#ffca28' },
      { name: 'AOS', color: '#22c55e' },
    ],
    live: 'https://bunsaiportfolio.vercel.app/',
    github: 'https://github.com/bunsai090/portfolio_1',
    buttonText: 'View Live Demo',
  },
  {
    image: studentManagement,
    title: 'Student Management System',
    desc: 'A simple and efficient system designed to manage student records, monitor performance, and streamline administrative tasks.',
    stack: [
      { name: 'React + Vite', color: '#646cff' },
      { name: 'Css', color: '#1572B6' },
      { name: 'Firebase', color: '#ffca28' },
    ],
    live: 'https://github.com/codeyatoh/student-management-system',
    github: 'https://github.com/codeyatoh/student-management-system',
  },
  {
    image: orderingManagement,
    title: 'Ordering Management System',
    desc: 'A user-friendly system for managing orders, tracking sales, and streamlining the ordering process for both staff and customers.',
    stack: [
      { name: 'React + Vite', color: '#646cff' },
      { name: 'Css', color: '#1572B6' },
      { name: 'Firebase', color: '#ffca28' },
      { name: 'Chart.js', color: '#36a2eb' },
    ],
    live: 'https://github.com/codeyatoh/Ordering-System',
    github: 'https://github.com/codeyatoh/Ordering-System',
  },
  {
    image: executiveDashboard,
    title: 'Executive Dashboard',
    desc: 'A centralized dashboard that provides real-time insights into sales, top products, and crew performance helping executives make data-driven decisions efficiently.',
    stack: [
      { name: 'FeatherJs', color: '#00bfae' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Css', color: '#1572B6' },
    ],
    live: 'https://github.com/codeyatoh/executive-dashboard-frontend',
    github: 'https://github.com/codeyatoh/executive-dashboard-frontend',
  },
];

import { LuGithub, LuExternalLink, LuLayers } from "react-icons/lu";

const Projects = (props) => {
  return (
    <section className="projects-section" id="projects" {...props}>
      <div className="projects-header" data-aos="fade-up">
        <div className="header-left">
          <h2 className="projects-main-title">
            Selected <span className="highlight">Works.</span>
          </h2>
          <p className="projects-subtitle">A collection of systems and applications engineered with precision and modern tech stacks.</p>
        </div>

        {projects.length > 2 && (
          <div className="projects-view-all-top">
            <button 
              className="view-all-btn-modern"
              onClick={() => {
                if (props.onNavigate) {
                  props.onNavigate('#/all-projects');
                } else {
                  window.location.hash = '#/all-projects';
                  window.scrollTo(0, 0);
                }
              }}
            >
              <span className="btn-text">View All Projects</span>
              <span className="btn-icon">
                <LuExternalLink />
              </span>
            </button>
          </div>
        )}
      </div>
      
      <div className="projects-grid-new">
        {projects.slice(0, 3).map((project, idx) => (
          <div 
            className="project-card-new" 
            key={project.title + idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
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
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="tech-pill"
                      style={{ '--accent-color': tech.color }}
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.stack.length > 4 && <span className="tech-pill-more">+{project.stack.length - 4}</span>}
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
    </section>
  );
};

export default Projects;