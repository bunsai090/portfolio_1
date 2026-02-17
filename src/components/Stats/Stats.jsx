import React from 'react';
import './Stats.css';
import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebook />, label: 'Facebook', url: 'https://www.facebook.com/Buunsai' },
  { icon: <FaTiktok />, label: 'TikTok', url: 'https://www.tiktok.com/@buunsai' },
  { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/saporno-john-christian-r-885568399/' },
  { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/buuunnnsaii/' },
];

const Stats = () => (
  <div className="stats">
    {socialLinks.map((social, idx) => (
      <a 
        href={social.url} 
        className="stat social-link" 
        key={idx}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="stat-icon">{social.icon}</div>
        <div className="stat-label">{social.label}</div>
      </a>
    ))}
  </div>
);

export default Stats;