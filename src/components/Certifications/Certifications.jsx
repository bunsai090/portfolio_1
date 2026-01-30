import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Certifications.css';
import googleDevCert from '../../assets/Certification/Google Developer Group Certicate.png';
import nationalCert from '../../assets/Certification/National Certificate II.jpg';
import cssTraining from '../../assets/Certification/Computer System Servicing Training.jpg';
import networkingCert from '../../assets/Certification/Networking Basics.png';
import ojtCert from '../../assets/Certification/OJT Axztech IT Solutions.png';

const certifications = [
  {
    image: googleDevCert,
    title: 'Google Developer Group Certificate',
    organization: 'Google Developer Group',
    year: '2025',
    desc: 'Participated in Google Developer Group events and activities, engaging with the developer community and learning about Google technologies.',
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
  {
    image: networkingCert,
    title: 'Networking Basics',
    organization: 'Cisco Networking Academy',
    year: '2023',
    desc: 'Completed course on networking fundamentals, covering network architecture, protocols, and troubleshooting.',
  },
  {
    image: ojtCert,
    title: 'OJT Completion Certificate',
    organization: 'Axztech IT Solutions',
    year: '2024',
    desc: 'Successfully completed On-the-Job Training at Axztech IT Solutions, gaining practical experience in IT solutions and services.',
  },
];

const Certifications = (props) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  
  // Carousel state
  const ref = React.useRef(null);

  // Handle window resize
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group certifications into chunks based on screen size
  // Desktop: 4 per slide (2x2 grid), Mobile: 2 per slide (2x1 stack)
  const chunkSize = isMobile ? 2 : 4;
  const chunkedCerts = [];
  for (let i = 0; i < certifications.length; i += chunkSize) {
    chunkedCerts.push(certifications.slice(i, i + chunkSize));
  }

  const slideLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -ref.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section className="certifications-section" id="certifications" {...props}>
      <h2 className="certifications-title">Certifications & Education</h2>
      <p className="certifications-subtitle">"Achievements and continuous learning journey."</p>
      
      <div className="certifications-container">
        <button className="nav-btn prev-btn" onClick={slideLeft}>
          &#10094;
        </button>
        
        <div className="certifications-slider" ref={ref}>
          {chunkedCerts.map((chunk, chunkIdx) => (
            <div className="certification-slide" key={chunkIdx}>
              {chunk.map((cert, idx) => (
                <div 
                  className="certification-card" 
                  key={cert.title + idx}
                  onClick={() => openModal(cert)}
                >
                  <div className="certification-img-wrap">
                    <img src={cert.image} alt={cert.title} className="certification-img" />
                  </div>
                  <div className="certification-details">
                    <div className="certification-title">{cert.title}</div>
                    <div className="certification-organization">{cert.organization}</div>
                    <div className="certification-year">{cert.year}</div>
                    <div className="certification-desc">{cert.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button className="nav-btn next-btn" onClick={slideRight}>
          &#10095;
        </button>
      </div>

      {selectedCert && (
        ReactDOM.createPortal(
          <div className="cert-modal" onClick={closeModal}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
              <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-img" />
            </div>
          </div>,
          document.body
        )
      )}
    </section>
  );
};

export default Certifications;
