import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './AllCertifications.css';
import { certifications } from './Certifications';
import { LuArrowLeft, LuLayers } from 'react-icons/lu';

const AllCertifications = ({ onNavigate }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'unset'; 
  };

  const handleBackToHome = () => {
    if (onNavigate) {
      onNavigate('#certifications');
    } else {
      window.location.hash = '#certifications';
    }
  };

  return (
    <div className="all-certs-container">
      {/* Grid background styling details */}
      <div className="grid-overlay"></div>
      
      <div className="all-certs-wrapper">
        {/* Page Hero Section */}
        <div className="all-certs-hero">
          {/* Navigation Back Header */}
          <div className="back-nav-header">
            <button onClick={handleBackToHome} className="back-btn-modern">
              <span className="back-btn-icon"><LuArrowLeft /></span>
              <span className="back-btn-text">Back to Home</span>
            </button>
          </div>
          
          <span className="hero-tag">CREDENTIALS & ARCHIVE</span>
          <h1 className="hero-title">
            My <span className="highlight">Certificates.</span>
          </h1>
          <p className="hero-subtitle">
            A chronological timeline of my specialized workshops, academic degrees, and professional certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div 
              className="certification-card-new" 
              key={cert.title + idx}
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
    </div>
  );
};

export default AllCertifications;
