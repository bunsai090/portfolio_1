import React from 'react';
import './ProfileCard.css';
import bunzPhoto from '../../assets/bunz_photo.png';
import reactIcon from '../../assets/react.svg';
import htmlIcon from '../../assets/html.png';
import githubIcon from '../../assets/github.png';
import flutterIcon from '../../assets/flutter.png';

const ProfileCard = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="profile-container">
      <div className="floating-icon icon-react">
        <img src={reactIcon} alt="React" />
      </div>
      <div className="floating-icon icon-html">
        <img src={htmlIcon} alt="HTML" />
      </div>
      <div className="floating-icon icon-github">
        <img src={githubIcon} alt="GitHub" />
      </div>
      <div className="floating-icon icon-flutter">
        <img src={flutterIcon} alt="Flutter" />
      </div>

      <div className="profile-card">
        <img src={bunzPhoto} alt="John Christian" className="profile-img" />
        <div className="profile-overlay">
          <div className="profile-user">
            <img src={bunzPhoto} alt="avatar" className="profile-avatar" />
            <div>
              <div className="profile-username">@bunsai</div>
              <div className="profile-status">Available for Work</div>
            </div>
          </div>
          <button className="profile-hire" onClick={handleHireMe}>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 