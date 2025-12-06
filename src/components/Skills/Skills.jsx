import React, { useState } from 'react';
import './Skills.css';
import bootstrapIcon from '../../assets/boron_13574994.png';
import cssIcon from '../../assets/css-3.png';
import reactIcon from '../../assets/react.svg';
import firebaseIcon from '../../assets/flames_15160685.png';
import viteIcon from '../../assets/VITE.png';
import githubIcon from '../../assets/github.png';
import vscodeIcon from '../../assets/vscode.png';
import miroIcon from '../../assets/miro.png';
import figmaIcon from '../../assets/FIGMA.png';

const skillsData = [
  {
    name: 'BOOSTRAP',
    icon: bootstrapIcon,
    category: 'Frontend',
    level: 'Beginner',
    color: '#7952b3'
  },
  {
    name: 'CSS3',
    icon: cssIcon,
    category: 'Frontend',
    level: 'Beginner',
    color: '#264de4'
  },
  {
    name: 'REACT JS',
    icon: reactIcon,
    category: 'Frontend',
    level: 'Beginner',
    color: '#61dbfb'
  },
  {
    name: 'FIREBASE',
    icon: firebaseIcon,
    category: 'Backend',
    level: 'Beginner',
    color: '#ffcb2b'
  },
  {
    name: 'VITE',
    icon: viteIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#646cff'
  },
  {
    name: 'GITHUB',
    icon: githubIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#ffffff'
  },
  {
    name: 'VS CODE',
    icon: vscodeIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#007acc'
  },
  {
    name: 'MIRO',
    icon: miroIcon,
    category: 'Design',
    level: 'Beginner',
    color: '#050038'
  },
  {
    name: 'FIGMA',
    icon: figmaIcon,
    category: 'Design',
    level: 'Beginner',
    color: '#f24e1e'
  }
];

const categories = [
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Tools', label: 'Tools' },
  { id: 'Design', label: 'Design' }
];

const Skills = (props) => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <div className="skills-section" id="skills" {...props}>
      <h2 className="skills-heading">Technical Skills</h2>
      <div className="skills-underline"></div>

      <div className="skills-top-carousel">
        <div className="carousel-track">
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div key={index} className="carousel-item">
              <img src={skill.icon} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="skills-filter-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {activeCategory === cat.id && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            )}
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon-wrapper">
              <img src={skill.icon} alt={skill.name} className="skill-main-icon" />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-badge" style={{ color: '#bcbcbc', borderColor: '#bcbcbc' }}>
              {skill.level}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;