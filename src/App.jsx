import { useState, useEffect } from 'react'
import './App.css'
import Header from './comps/header/header'
import Content from './comps/body/content'
import Footer from './comps/footer/footer'
import './comps/nav/nav.css'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { BsFileCodeFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'
import { BsFilePdfFill } from 'react-icons/bs'
import { BsSun, BsMoon } from 'react-icons/bs'
import ProjectsShowcase from './comps/projects/ProjectsShowcase'
import { initLenis } from './utils/lenis'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lenis, setLenis] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [globalVolume, setGlobalVolume] = useState(0.7);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenisInstance = initLenis();
    setLenis(lenisInstance);
    
    // Cleanup function
    return () => {
      if (lenisInstance && lenisInstance.destroy) {
        lenisInstance.destroy();
      }
    };
  }, []);

  // Function to scroll to element smoothly using Lenis
  const scrollToElement = (elementId) => {
    console.log('Trying to scroll to:', elementId);
    const element = document.getElementById(elementId);
    console.log('Element found:', element);
    
    if (element && lenis) {
      console.log('Using Lenis to scroll');
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2
      });
    } else if (element) {
      console.log('Using fallback scroll');
      // Fallback for when Lenis isn't ready
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Element not found!');
    }
  };

  // Function to download resume
  const downloadResume = (filename) => {
    const link = document.createElement('a');
    link.href = `/public/${filename}`; // Adjust path as needed
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Scroll detection to set active section with Lenis
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'bento', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Use both Lenis and window scroll events for reliability
    if (lenis && lenis.on) {
      lenis.on('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      if (lenis && lenis.off) {
        lenis.off('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lenis]);
  return (
    <>
    
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Night/Day Mode Toggle - Top Right */}
      <button className='theme-toggle' onClick={toggleTheme}>
        {isDarkMode ? <BsSun /> : <BsMoon />}
      </button>

      {/* Download Resume Button - Top Right, below theme toggle */}
      <button className='resume-download' onClick={() => downloadResume('resume.pdf')}>
        <BsFilePdfFill />
      </button>

      {/* Global audio volume slider */}
      <div className='volume-slider-wrapper'>
        <span className='volume-label'>VOLUME</span>
        <input
          type='range'
          min='0'
          max='1'
          step='0.01'
          value={globalVolume}
          onChange={(e) => setGlobalVolume(parseFloat(e.target.value))}
          className='volume-slider'
        />
      </div>

      <div className='nav'>
        <button 
          onClick={() => scrollToElement('home')} 
          className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToElement('projects')} 
          className={`nav-button ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToElement('bento')} 
          className={`nav-button ${activeSection === 'bento' ? 'active' : ''}`}
        >
          Explore
        </button>
        <button 
          onClick={() => scrollToElement('contact')} 
          className={`nav-button ${activeSection === 'contact' ? 'active' : ''}`}
        >
          Contact
        </button>
      </div>
      <Header id="home" />
      <ProjectsShowcase id="projects" />
      <Content id="contact" bentoId="bento" audioVolume={globalVolume} />
      <Footer />
    </div>
    </>
  )
}

export default App
