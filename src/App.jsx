import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import ProfileCard from './components/ProfileCard/ProfileCard';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/contact_me/ContactMe';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="app-container" data-aos="fade-in">
        <div className="main-content">
          <div>
            <Hero />
            <Stats />
          </div>
          <div className="profile-card-wrapper">
            <ProfileCard />
          </div>
        </div>
        <AboutMe data-aos="fade-up" />
        <Skills data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <ContactMe data-aos="fade-up" />
      </div>
    </>
  );
}

export default App;
