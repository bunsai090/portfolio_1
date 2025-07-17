import React from 'react';
import './ProfileCard.css';
import bunzPhoto from '../../assets/bunz_photo.png';

const ProfileCard = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="profile-card">
      <img src={bunzPhoto} alt="John Christian" className="profile-img" />
      <div className="profile-overlay">
        <div className="profile-user">
          <img src={bunzPhoto} alt="avatar" className="profile-avatar" />
          <div>
            <div className="profile-username">@bunsat</div>
            <div className="profile-status">Available for Work</div>
          </div>
        </div>
        <button className="profile-hire" onClick={handleHireMe}>Hire Me</button>
      </div>
    </div>
  );
};

export default ProfileCard; 