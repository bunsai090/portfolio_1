import React, { useState, useRef, useEffect } from 'react';
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
const typescriptIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";

const skillsData = [
  {
    name: 'TYPESCRIPT',
    icon: typescriptIcon,
    category: 'Frontend',
    level: 'Comfortable',
    color: '#3178c6'
  },
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

import { 
  MdOutlineDashboard, 
  MdOutlineStorage, 
  MdOutlineBuild,
  MdArrowForwardIos
} from "react-icons/md";

const Skills = (props) => {
  const [showAllBackend, setShowAllBackend] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  // Group skills
  const frontendSkills = skillsData.filter(s => s.category === 'Frontend');
  const backendSkills = skillsData.filter(s => s.category === 'Backend');
  const toolsDesignSkills = skillsData.filter(s => s.category === 'Tools' || s.category === 'Design');

  const visibleBackend = showAllBackend ? backendSkills : backendSkills.slice(0, 2);
  const visibleTools = showAllTools ? toolsDesignSkills : toolsDesignSkills.slice(0, 2);

  return (
    <section className="skills-section" id="skills" {...props}>
      <div className="skills-header" data-aos="fade-up">
        <h2 className="skills-main-title">
          Technical <span className="highlight">Arsenal.</span>
        </h2>
        <p className="skills-subtitle">
          A curated overview of the technologies, frameworks, and tools I utilize to engineer high-performance, visually compelling digital experiences.
        </p>
      </div>

      <div className="skills-groups">
        {/* Frontend Section */}
        <div className="skills-group" data-aos="fade-up">
          <div className="group-title">
            <div className="title-left">
              <MdOutlineDashboard className="group-icon" />
              <h3>Frontend Development</h3>
            </div>
          </div>
          <div className="skills-grid-new">
            {frontendSkills.map((skill, idx) => (
              <div className="skill-card-new" key={idx}>
                <div className="skill-icon-bg">
                  <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                </div>
                <span className="skill-label-new">{skill.name}</span>
                <div className="skill-level-badge">
                  {skill.level.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Tools Row */}
        <div className="skills-row-split">
          <div className="skills-group" data-aos="fade-right">
            <div className="group-title">
              <div className="title-left">
                <MdOutlineStorage className="group-icon" />
                <h3>Backend Architecture</h3>
              </div>
              {backendSkills.length > 2 && (
                <button 
                  className={`view-all-text-btn ${showAllBackend ? 'active' : ''}`}
                  onClick={() => setShowAllBackend(!showAllBackend)}
                >
                  {showAllBackend ? 'Show Less' : 'View All Techstack'}
                </button>
              )}
            </div>
            
            <div className="skills-grid-new">
              {backendSkills.slice(0, 2).map((skill, idx) => (
                <div className="skill-card-new" key={idx}>
                  <div className="skill-icon-bg">
                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                  </div>
                  <span className="skill-label-new">{skill.name}</span>
                  <div className="skill-level-badge">
                    {skill.level.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <div className={`skills-extra-container ${showAllBackend ? 'expanded' : 'collapsed'}`}>
              <div className="skills-grid-new extra-padding">
                {backendSkills.slice(2).map((skill, idx) => (
                  <div className="skill-card-new" key={idx}>
                    <div className="skill-icon-bg">
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                    </div>
                    <span className="skill-label-new">{skill.name}</span>
                    <div className="skill-level-badge">
                      {skill.level.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="skills-group" data-aos="fade-left">
            <div className="group-title">
              <div className="title-left">
                <MdOutlineBuild className="group-icon" />
                <h3>Tools & Design</h3>
              </div>
              {toolsDesignSkills.length > 2 && (
                <button 
                  className={`view-all-text-btn ${showAllTools ? 'active' : ''}`}
                  onClick={() => setShowAllTools(!showAllTools)}
                >
                  {showAllTools ? 'Show Less' : 'View All Techstack'}
                </button>
              )}
            </div>
            
            <div className="skills-grid-new">
              {toolsDesignSkills.slice(0, 2).map((skill, idx) => (
                <div className="skill-card-new" key={idx}>
                  <div className="skill-icon-bg">
                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                  </div>
                  <span className="skill-label-new">{skill.name}</span>
                  <div className="skill-level-badge">
                    {skill.level.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <div className={`skills-extra-container ${showAllTools ? 'expanded' : 'collapsed'}`}>
              <div className="skills-grid-new extra-padding">
                {toolsDesignSkills.slice(2).map((skill, idx) => (
                  <div className="skill-card-new" key={idx}>
                    <div className="skill-icon-bg">
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                    </div>
                    <span className="skill-label-new">{skill.name}</span>
                    <div className="skill-level-badge">
                      {skill.level.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;