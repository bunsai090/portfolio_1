import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Certifications.css';
import googleDevCert from '../../assets/Certification/Google Developer Group Certicate.png';
import nationalCert from '../../assets/Certification/National Certificate II.jpg';
import cssTraining from '../../assets/Certification/Computer System Servicing Training.jpg';
import networkingCert from '../../assets/Certification/Networking Basics.png';
import ojtCert from '../../assets/Certification/OJT Axztech IT Solutions.png';
import aiEducationCert from '../../assets/Certification/AI Education NotebookLM.png.png';
import freeCodingBootcamp from '../../assets/Certification/Free Coding Bootcamp.png';

const certifications = [
  {
    image: freeCodingBootcamp,
    title: 'Free Coding Bootcamp: Basic Web Development Workshop',
    organization: 'ZUITT / Google Developer Groups on Campus',
    year: '2026',
    desc: 'Actively participated in the Free Coding Bootcamp focused on basic web development, learning fundamental web development skills and technologies.',
  },
  {
    image: googleDevCert,
    title: 'Google Developer Group Certificate',
    organization: 'Google Developer Group',
    year: '2025',
    desc: 'Participated in Google Developer Group events and activities, engaging with the developer community and learning about Google technologies.',
  },
  {
    image: ojtCert,
    title: 'OJT Completion Certificate',
    organization: 'Axztech IT Solutions',
    year: '2024',
    desc: 'Successfully completed On-the-Job Training at Axztech IT Solutions, gaining practical experience in IT solutions and services.',
  },
  {
    image: aiEducationCert,
    title: 'AI for Education: Unlocking the Power of NotebookLM',
    organization: 'DICT Webinar',
    year: '2025',
    desc: 'Attended webinar on Artificial Intelligence for Education, exploring how NotebookLM can enhance learning and educational practices.',
  },
  {
    image: networkingCert,
    title: 'Networking Basics',
    organization: 'Cisco Networking Academy',
    year: '2023',
    desc: 'Completed course on networking fundamentals, covering network architecture, protocols, and troubleshooting.',
  },
  {
    image: nationalCert,
    title: 'National Certificate II',
    organization: 'TESDA',
    year: '2023',
    desc: 'National Certification in Computer System Servicing, demonstrating competency in computer hardware and software troubleshooting.',
  },
  {
    image: cssTraining,
    title: 'Computer System Servicing Training',
    organization: 'Training Institution',
    year: '2023',
    desc: 'Completed comprehensive training in computer system servicing, covering hardware maintenance and software installation.',
  },
];

const Certifications = (props) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll ? certifications : certifications.slice(0, 4);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset'; 
  };

  return (
    <section className="certifications-section" id="certifications" {...props}>
      <div className="cert-header">
        <div className="header-left-group">
          <h2 className="certifications-title">Certifications <span className="accent">&</span> Education</h2>
          <div className="title-underline"></div>
          <p className="certifications-subtitle">A chronicle of my academic achievements and professional growth.</p>
        </div>

        {certifications.length > 4 && (
          <div className="view-all-container-top">
            <button 
              className="view-all-btn-modern-alt" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View All Certificates'}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
      
      <div className="certifications-grid">
        {certifications.slice(0, 5).map((cert, idx) => (
          <div 
            className={`certification-card-new ${idx === 0 ? 'featured' : ''}`} 
            key={cert.title + idx}
            onClick={() => openModal(cert)}
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
            <div className="cert-card-inner">
              <div className="certification-img-wrap-new">
                <img src={cert.image} alt={cert.title} className="certification-img-new" />
                <div className="cert-overlay-new">
                  <span className="view-text">View Certificate</span>
                </div>
              </div>
              
              <div className="certification-details-new">
                <div className="cert-top-meta">
                  <span className="certification-organization-new">{cert.organization}</span>
                  <span className="certification-year-new">{cert.year}</span>
                </div>
                <h3 className="certification-title-new">{cert.title}</h3>
                <p className="certification-desc-new">{cert.desc}</p>
              </div>
            </div>
            <div className="card-accent-border"></div>
          </div>
        ))}
      </div>

      <div className={`certifications-grid-extra ${showAll ? 'expanded' : 'collapsed'}`}>
        {certifications.slice(5).map((cert, idx) => (
          <div 
            className="certification-card-new" 
            key={cert.title + (idx + 5)}
            onClick={() => openModal(cert)}
          >
            <div className="cert-card-inner">
              <div className="certification-img-wrap-new">
                <img src={cert.image} alt={cert.title} className="certification-img-new" />
                <div className="cert-overlay-new">
                  <span className="view-text">View Certificate</span>
                </div>
              </div>
              
              <div className="certification-details-new">
                <div className="cert-top-meta">
                  <span className="certification-organization-new">{cert.organization}</span>
                  <span className="certification-year-new">{cert.year}</span>
                </div>
                <h3 className="certification-title-new">{cert.title}</h3>
                <p className="certification-desc-new">{cert.desc}</p>
              </div>
            </div>
            <div className="card-accent-border"></div>
          </div>
        ))}
      </div>
      {selectedCert && (
        ReactDOM.createPortal(
          <div className="cert-modal-new" onClick={closeModal}>
            <div className="cert-modal-backdrop-new"></div>
            <div className="cert-modal-content-new" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close-new" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="modal-img-container">
                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img-new" />
              </div>
              <div className="cert-modal-info-new">
                <h3>{selectedCert.title}</h3>
                <p className="modal-org">{selectedCert.organization} • {selectedCert.year}</p>
              </div>
            </div>
          </div>,
          document.body
        )
      )}
    </section>
  );
};

export default Certifications;
