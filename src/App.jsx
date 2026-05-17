import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import ProfileCard from './components/ProfileCard/ProfileCard';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import ContactMe from './components/contact_me/ContactMe';
import Footer from './components/Footer/Footer';
import Particles from './components/magicui/Particles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AllProjects from './components/Projects/AllProjects';
import { useState, useEffect } from 'react';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const [fadeState, setFadeState] = useState('fade-in'); // 'fade-in' | 'fade-out'
  const [pendingHash, setPendingHash] = useState(null);

  const navigateWithTransition = (targetHash) => {
    if (fadeState === 'fade-out') return;
    setFadeState('fade-out');
    setPendingHash(targetHash);
  };

  useEffect(() => {
    if (fadeState === 'fade-out' && pendingHash) {
      const timer = setTimeout(() => {
        window.location.hash = pendingHash;
        window.scrollTo(0, 0);
        setFadeState('fade-in');
        setPendingHash(null);
      }, 350); // Matches the CSS transition duration (0.35s)
      return () => clearTimeout(timer);
    }
  }, [fadeState, pendingHash]);

  useEffect(() => {
    const handleHashChange = () => {
      // Sync hash state unless we're in the middle of a transition
      if (fadeState === 'fade-in') {
        setCurrentHash(window.location.hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    
    // Sync initial state
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [fadeState]);

  // Sync state once the transition reveals the new page
  useEffect(() => {
    if (fadeState === 'fade-in') {
      setCurrentHash(window.location.hash);
    }
  }, [fadeState]);

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-out',
      offset: 50,
      delay: 0,
      disable: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  // Smooth scroll back to section when navigating from AllProjects back to Home
  useEffect(() => {
    if (currentHash && currentHash !== '#/all-projects') {
      const sectionId = currentHash.replace('#', '');
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // Wait for components to finish mounting
      }
    }
  }, [currentHash]);

  const isProjectsPage = currentHash === '#/all-projects';

  return (
    <>
      <Navbar />
      
      <div className={`app-container page-transition-wrapper ${fadeState}`} data-aos="fade-in">
        {isProjectsPage ? (
          <AllProjects data-aos="fade-up" onNavigate={navigateWithTransition} />
        ) : (
          <>
            <div className="main-content" style={{ position: 'relative' }}>
              <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color="#ffffff"
                refresh
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              <div className="hero-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <Stats />
              </div>
              <div className="profile-card-wrapper" style={{ position: 'relative', zIndex: 1 }}>
                <ProfileCard />
              </div>
            </div>
            <AboutMe data-aos="fade-up" />
            <Skills data-aos="fade-up" />
            <Projects data-aos="fade-up" onNavigate={navigateWithTransition} />
            <Certifications data-aos="fade-up" />
            <ContactMe data-aos="fade-up" />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
