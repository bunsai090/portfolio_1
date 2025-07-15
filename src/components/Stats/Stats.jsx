import React from 'react';
import './Stats.css';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Project Completed' },
  { value: '3+', label: 'Happy Client' },
];

const Stats = () => (
  <div className="stats">
    {stats.map((stat, idx) => (
      <div className="stat" key={idx}>
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default Stats; 