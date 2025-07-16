import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import ProfileCard from './components/ProfileCard/ProfileCard';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div>
          <Hero />
          <Stats />
        </div>
        <div className="profile-card-wrapper">
          <ProfileCard />
        </div>
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
