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
import AllCertifications from './components/Certifications/AllCertifications';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [fadeState, setFadeState] = useState('fade-in'); // 'fade-in' | 'fade-out'
  const [pendingHash, setPendingHash] = useState(null);
  const cameFromTransitionRef = useRef(false);

  // Centralized navigation logic (just update hash directly, global listener will catch and transition!)
  const navigateWithTransition = (targetHash) => {
    window.location.hash = targetHash;
  };

  // 1. Listen for browser/navbar/button hash changes and centralize transitions
  useEffect(() => {
    const handleHashChange = () => {
      const targetHash = window.location.hash || '#home';
      
      // If we are already displaying this page/hash, ignore
      if (targetHash === currentHash) return;

      const isCurrentSubpage = currentHash === '#/all-projects' || currentHash === '#/all-certificates';
      const isTargetSubpage = targetHash === '#/all-projects' || targetHash === '#/all-certificates';
      const needsTransition = isCurrentSubpage || isTargetSubpage;

      if (needsTransition) {
        if (fadeState === 'fade-out') return;
        
        // Start the fade out transition!
        setFadeState('fade-out');
        setPendingHash(targetHash);
        cameFromTransitionRef.current = true;
      } else {
        // Direct transition (e.g. scrolling sections on the homepage)
        setCurrentHash(targetHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Sync initial mount hash
    const initialHash = window.location.hash || '#home';
    if (initialHash !== currentHash) {
      setCurrentHash(initialHash);
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentHash, fadeState]);

  // 2. Perform page swapping and scroll positioning when fade-out is complete
  useEffect(() => {
    if (fadeState === 'fade-out' && pendingHash) {
      const timer = setTimeout(() => {
        const isTargetSubpage = pendingHash === '#/all-projects' || pendingHash === '#/all-certificates';
        
        // Instantly position viewport BEFORE mounting the target subpage to prevent browser shrink jerks
        if (isTargetSubpage) {
          window.scrollTo(0, 0);
        }
        
        // Swap active page content state!
        setCurrentHash(pendingHash);
        
        // Give React a microtask render tick (50ms) to fully mount and lay out the homepage DOM elements
        setTimeout(() => {
          if (!isTargetSubpage) {
            const sectionId = pendingHash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
              // Calculate absolute top coordinate relative to document scroll
              const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
              window.scrollTo(0, absoluteTop - 80); // Subtract 80px for floating navbar padding
            } else {
              window.scrollTo(0, 0);
            }
          }
          setFadeState('fade-in');
          setPendingHash(null);
        }, 50);
      }, 350); // Matches the CSS transition duration (0.35s)
      return () => clearTimeout(timer);
    }
  }, [fadeState, pendingHash]);

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

  // Smooth scroll back to section when navigating back to Home
  useEffect(() => {
    if (currentHash && currentHash !== '#/all-projects' && currentHash !== '#/all-certificates') {
      const sectionId = currentHash.replace('#', '');
      
      // If we just returned from a subpage transition, skip the smooth scroll entirely
      // because we already instantly positioned the page during the transition!
      if (cameFromTransitionRef.current) {
        cameFromTransitionRef.current = false;
        return;
      }

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
  const isCertificationsPage = currentHash === '#/all-certificates';

  return (
    <>
      <Navbar />
      
      <div className={`app-container page-transition-wrapper ${fadeState}`}>
        {isProjectsPage ? (
          <AllProjects data-aos="fade-up" onNavigate={navigateWithTransition} />
        ) : isCertificationsPage ? (
          <AllCertifications data-aos="fade-up" onNavigate={navigateWithTransition} />
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
            <Certifications data-aos="fade-up" onNavigate={navigateWithTransition} />
            <ContactMe data-aos="fade-up" />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
