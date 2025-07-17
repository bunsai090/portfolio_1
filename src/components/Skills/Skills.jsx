import React from 'react';
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

const skills = [
  {
    name: 'BOOTSTRAP',
    icon: <img src={bootstrapIcon} alt="Bootstrap" className="skills-img" />,
  },
  {
    name: 'CSS',
    icon: <img src={cssIcon} alt="CSS" className="skills-img" />,
  },
  {
    name: 'REACTJS',
    icon: <img src={reactIcon} alt="ReactJS" className="skills-img" />,
  },
  {
    name: 'FIREBASE',
    icon: <img src={firebaseIcon} alt="Firebase" className="skills-img" />,
  },
  {
    name: 'VITE',
    icon: <img src={viteIcon} alt="Vite" className="skills-img" />,
  },
];

const tools = [
  {
    name: 'GITHUB',
    icon: <img src={githubIcon} alt="GitHub" className="skills-img" />,
  },
  {
    name: 'VSCODE',
    icon: <img src={vscodeIcon} alt="VSCode" className="skills-img" />,
  },
  {
    name: 'MIRO',
    icon: <img src={miroIcon} alt="Miro" className="skills-img" />,
  },
  {
    name: 'FIGMA',
    icon: <img src={figmaIcon} alt="Figma" className="skills-img" />,
  },
];

const Skills = (props) => (
  <div className="skills-section" id="skills" {...props}>
    <div className="skills-block">
      <div className="skills-title-row">
        <span className="skills-title-line"></span>
        <h2 className="skills-title">Skills</h2>
      </div>
      <div className="skills-card">
        {skills.map((skill, idx) => (
          <div className="skills-item" key={skill.name}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="skills-block">
      <div className="skills-title-row">
        <span className="skills-title-line"></span>
        <h2 className="skills-title">Tools</h2>
      </div>
      <div className="skills-card">
        {tools.map((tool, idx) => (
          <div className="skills-item" key={tool.name}>
            {tool.icon}
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills; 