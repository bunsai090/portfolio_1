import React, { useState, useRef } from 'react';
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
import flutterIcon from '../../assets/flutter.png';
import mysqlIcon from '../../assets/mysql_PNG9.png';
import nodejsIcon from '../../assets/nodejs.png';
import gitIcon from '../../assets/git.png';
import yarnIcon from '../../assets/yarn.png';
import arduinoIcon from '../../assets/arduino.png';
import htmlIcon from '../../assets/html.png';
import phpIcon from '../../assets/php.png';
import npmIcon from '../../assets/npm.png';
import xamppIcon from '../../assets/xamp.png';
import wampIcon from '../../assets/wamp.png';

const skillsData = [
  {
    name: 'BOOSTRAP',
    icon: bootstrapIcon,
    category: 'Frontend',
    level: 'Comfortable',
    color: '#7952b3'
  },
  {
    name: 'CSS3',
    icon: cssIcon,
    category: 'Frontend',
    level: 'Comfortable',
    color: '#264de4'
  },
  {
    name: 'REACT JS',
    icon: reactIcon,
    category: 'Frontend',
    level: 'Comfortable',
    color: '#61dbfb'
  },
  {
    name: 'HTML5',
    icon: htmlIcon,
    category: 'Frontend',
    level: 'Comfortable',
    color: '#e34c26'
  },
  {
    name: 'PHP',
    icon: phpIcon,
    category: 'Backend',
    level: 'Beginner',
    color: '#777bb4'
  },
  {
    name: 'FIREBASE',
    icon: firebaseIcon,
    category: 'Backend',
    level: 'Beginner',
    color: '#ffcb2b'
  },
  {
    name: 'MYSQL',
    icon: mysqlIcon,
    category: 'Backend',
    level: 'Beginner',
    color: '#00758f'
  },
  {
    name: 'NODE.JS',
    icon: nodejsIcon,
    category: 'Backend',
    level: 'Beginner',
    color: '#68a063'
  },
  {
    name: 'FLUTTER',
    icon: flutterIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#02569b'
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
    name: 'GIT',
    icon: gitIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#f05032'
  },
  {
    name: 'VS CODE',
    icon: vscodeIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#007acc'
  },
  {
    name: 'YARN',
    icon: yarnIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#2c8ebb'
  },
  {
    name: 'NPM',
    icon: npmIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#cb3837'
  },
  {
    name: 'XAMPP',
    icon: xamppIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#fb7a24'
  },
  {
    name: 'WAMP',
    icon: wampIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#ff6c2c'
  },
  {
    name: 'ARDUINO',
    icon: arduinoIcon,
    category: 'Tools',
    level: 'Beginner',
    color: '#00979d'
  },
  {
    name: 'MIRO',
    icon: miroIcon,
    category: 'Design',
    level: 'Comfortable',
    color: '#050038'
  },
  {
    name: 'FIGMA',
    icon: figmaIcon,
    category: 'Design',
    level: 'Comfortable',
    color: '#f24e1e'
  }
// removed unused "i"
];

const categories = [
  { id: 'Frontend', label: 'Frontend' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Tools', label: 'Tools' },
  { id: 'Design', label: 'Design' }
];

const Skills = (props) => {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const scrollRef = useRef(null);

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust based on card width + gap
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

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

      <div className="skills-slider-container">
        <button className="nav-btn prev" onClick={() => scroll('left')}>
          &#8249;
        </button>
        
        <div className="skills-slider" ref={scrollRef}>
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

        <button className="nav-btn next" onClick={() => scroll('right')}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Skills;