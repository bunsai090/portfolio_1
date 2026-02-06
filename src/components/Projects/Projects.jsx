import React, { useState } from 'react';
import './Projects.css';
import personalWebsite from '../../assets/personal website.png';
import studentManagement from '../../assets/student_management_system.png';
import orderingManagement from '../../assets/ordering management system.png';
import executiveDashboard from '../../assets/executive dashboard.png';

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8.59V13a1 1 0 1 1-2 0V8.59l-5.3 5.3a1 1 0 0 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.42L18 8.59z" fill="#bcbcbc"/>
    <path d="M5 19a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v13h13a1 1 0 1 1 0 2H5z" fill="#bcbcbc"/>
  </svg>
);

const projects = [
  {
    image: personalWebsite,
    title: 'Personal Website',
    desc: 'A passionate and driven developer showcasing projects in web development, UI/UX design, and system implementation',
    stack: [
      { name: 'React', color: '#61dafb' },
      { name: 'CSS', color: '#1572B6' },
    ],
    live: '#',
    github: 'https://github.com/bunsai090/portfolio_1',
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
    live: '#',
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
    live: '#',
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
    live: '#',
    github: 'https://github.com/yourusername/executive-dashboard',
  },
];

const Projects = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
  // Carousel state
  const ref = React.useRef(null);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group projects into chunks based on screen size
  // Desktop: 4 per slide (1x4 row), Mobile: 2 per slide (2x1 stack)
  const chunkSize = isMobile ? 2 : 4;
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += chunkSize) {
    chunkedProjects.push(projects.slice(i, i + chunkSize));
  }

  const slideLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -ref.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects-section" id="projects" {...props}>
      <h2 className="projects-title">Past Project Experience</h2>
      <p className="projects-subtitle">"Explore the projects I've worked on."</p>
      
      <div className="projects-container">
        <button className="nav-btn prev-btn" onClick={slideLeft}>
          &#10094;
        </button>
        
        <div className="projects-slider" ref={ref}>
          {chunkedProjects.map((chunk, chunkIdx) => (
            <div className="project-slide" key={chunkIdx}>
              {chunk.map((project, idx) => (
                <div className="project-card" key={project.title + idx}>
                  <div className="project-img-wrap">
                    <img src={project.image} alt={project.title} className="project-img" />
                  </div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-desc">{project.desc}</div>
                  <div className="project-stack-label">Teach Stack:</div>
                  <div className="project-stack">
                    {project.stack.map((tech, i) => (
                      <span className="project-tech" style={{ color: tech.color }} key={tech.name + i}>{tech.name}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <ShareIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="nav-btn next-btn" onClick={slideRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Projects;