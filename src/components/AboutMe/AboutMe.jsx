import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './AboutMe.css';
import bunzAboutMe from '../../assets/bunz_aboutme.png';
import interestsData from './interestsData';
import MusicContent from './MusicContent';
import MoviesContent from './MoviesContent';
import GenericContent from './GenericContent';
import { IconCloudDemo } from './IconCloudDemo';

const iconStyle = {
  width: '1.1em',
  height: '1.1em',
  verticalAlign: 'middle',
  marginRight: '0.5em',
  fill: '#bcbcbc',
  flexShrink: 0,
};

const AboutMe = (props) => {
  const [activeInterest, setActiveInterest] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeInterest) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [activeInterest]);

  return (
    <div className="aboutme-section" id="aboutme" {...props}>
      <h2 className="aboutme-section-title">
        About <span className="highlight">Me</span>
      </h2>
      <div className="aboutme-box">
        <div className="aboutme-left">
          <div className="aboutme-photo-wrapper">
            <img src={bunzAboutMe} alt="John Christian R. Saporno" className="aboutme-photo" />
          </div>
        </div>
        <div className="aboutme-right">
          <div className="aboutme-header">
            <svg style={{ width: '1.2em', height: '1.2em', fill: '#bcbcbc', marginRight: '0.5rem' }} viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Personal Information
          </div>
          <h3 className="aboutme-name">
            John Christian R. Saporno
          </h3>
          <p className="aboutme-subtitle">IT Student & Aspiring Programmer</p>

          <div className="aboutme-main-content">
            <div className="aboutme-text-content">
              <p className="aboutme-description">
                I'm an IT student who loves building for the web and learning by doing. I enjoy tackling real-world challenges and continuously improving my skills through practical experience.
              </p>

              <div className="aboutme-details">
                <div className="aboutme-detail-item">
                  <svg style={iconStyle} viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">+63 09925750069</span>
                </div>
                <div className="aboutme-detail-item">
                  <svg style={iconStyle} viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="detail-label">Education:</span>
                  <span className="detail-value">BS InfoTech, 3rd Year</span>
                </div>
                <div className="aboutme-detail-item">
                  <svg style={iconStyle} viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">Sea Breeze, Zamboanga City</span>
                </div>
                <div className="aboutme-detail-item">
                  <svg style={iconStyle} viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.83l8 6.67 8-6.67V20H4z" />
                  </svg>
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">bunsai090saporno@gmail.com</span>
                </div>
                <div className="aboutme-detail-item">
                  <svg style={iconStyle} viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                  <span className="detail-label">Freelance:</span>
                  <span className="detail-value">Computer Maintenance / Assembling a Computer / Building Website</span>
                </div>
              </div>

              <a
                className="download-cv-btn"
                href="/John_Christian_R__Saporno_classic-professional.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <svg style={{ width: '1.2em', height: '1.2em', marginRight: '0.5rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                View CV
              </a>
            </div>

            <div className="aboutme-cloud-container">
              <IconCloudDemo />
            </div>
          </div>

          <div className="aboutme-interests">
            <div className="interests-title">Interests:</div>
            <div className="interests-grid">
              <div className="interest-badge clickable" onClick={() => setActiveInterest('music')}>
                <svg style={{ width: '1em', height: '1em', marginRight: '0.4rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
                </svg>
                Music
              </div>
              <div className="interest-badge clickable" onClick={() => setActiveInterest('movies')}>
                <svg style={{ width: '1em', height: '1em', marginRight: '0.4rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                </svg>
                Movies
              </div>
              <div className="interest-badge clickable" onClick={() => setActiveInterest('gaming')}>
                <svg style={{ width: '1em', height: '1em', marginRight: '0.4rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0c1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4-0.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                </svg>
                Gaming
              </div>
              <div className="interest-badge clickable" onClick={() => setActiveInterest('anime')}>
                <svg style={{ width: '1em', height: '1em', marginRight: '0.4rem' }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                Anime
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        activeInterest && interestsData[activeInterest] && createPortal(
          <div className="interest-modal-backdrop" onClick={() => setActiveInterest(null)}>
            <div className={`interest-modal ${['music', 'movies', 'gaming', 'anime'].includes(activeInterest) ? 'spotify-theme' : ''}`} onClick={(e) => e.stopPropagation()}>

              {/* Conditional Header for Spotify vs Generic */}
              {['music', 'movies', 'gaming', 'anime'].includes(activeInterest) ? (
                <div className="spotify-header">
                  <div className="spotify-controls">
                    <button className="spotify-play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                    <button className="spotify-icon-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" /></svg>
                    </button>
                    <button className="spotify-icon-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4zm-4-4h8v2H8v-2z" /></svg>
                    </button>
                  </div>
                  <h2 className="spotify-header-title">
                    {activeInterest === 'music' ? 'Bunsai favorite song <3' :
                      activeInterest === 'movies' ? 'Bunsai favorite movies <3' :
                        activeInterest === 'gaming' ? 'Bunsai favorite games <3' :
                          'Bunsai favorite anime <3'}
                  </h2>
                  <button className="interest-modal-close" onClick={() => setActiveInterest(null)}>×</button>
                </div>
              ) : (
                <div className="interest-modal-header">
                  <h3>{interestsData[activeInterest].emoji} {interestsData[activeInterest].title}</h3>
                  <button className="interest-modal-close" onClick={() => setActiveInterest(null)}>×</button>
                </div>
              )}

              <div className={`interest-modal-content ${activeInterest === 'music' ? 'spotify-content' : ''}`}>
                {activeInterest === 'music' ? (
                  <MusicContent items={interestsData.music.items} />
                ) : ['movies', 'gaming', 'anime'].includes(activeInterest) ? (
                  <MoviesContent sections={interestsData[activeInterest].sections} type={activeInterest} />
                ) : (
                  <GenericContent items={interestsData[activeInterest].items} type={activeInterest} />
                )}
              </div>

              {/* Player Bar for Music */}
              {activeInterest === 'music' && (
                <div className="spotify-player-bar">
                  <div className="player-progress-line"></div>
                  <div className="player-controls-mock">

                  </div>
                </div>
              )}

            </div>
          </div>,
          document.body
        )
      }


    </div >
  );
};

export default AboutMe;