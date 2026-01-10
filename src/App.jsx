import { useState, useEffect } from 'react'
import './App.css'
import Header from './comps/header/header'
import Content from './comps/body/content'
import Footer from './comps/footer/footer'
import './comps/nav/nav.css'
import { BsFilePdfFill, BsSun, BsMoon, BsPlayFill, BsPauseFill } from 'react-icons/bs'
import ProjectsShowcase from './comps/projects/ProjectsShowcase'
import Matrix from './comps/matrix/Matrix'
import MatrixCanvas from './comps/matrix/MatrixCanvas'
import { initLenis } from './utils/lenis'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lenis, setLenis] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [globalVolume, setGlobalVolume] = useState(0.7);
  const [matrixActive, setMatrixActive] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Function to control Spotify embed play/pause
  const controlSpotify = (action) => {
    const spotifyFrame = document.querySelector('iframe[title="Spotify Playlist"]');
    if (!spotifyFrame || !spotifyFrame.contentWindow) return;

    try {
      // Try multiple message formats
      const messages = [
        { command: action, type: 'command' },
        { action: action, method: action },
        { type: 'spotify-command', command: action }
      ];

      messages.forEach(msg => {
        try {
          spotifyFrame.contentWindow.postMessage(msg, '*');
        } catch (e) {
          // Silently fail
        }
      });
    } catch (e) {
      // Silently handle errors
    }
  };

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
    const element = document.getElementById(elementId);
    
    if (element && lenis) {
      lenis.scrollTo(element, {
        offset: 0,
        duration: 1.2
      });
    } else if (element) {
      // Fallback for when Lenis isn't ready
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to download resume
  const downloadResume = (filename) => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}${filename}`; // Files in public folder are served from base URL
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    // Disable matrix effect when switching to light mode
    if (!newDarkMode && matrixActive) {
      setMatrixActive(false);
    }
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
      {/* Matrix canvas - covers entire page */}
      <MatrixCanvas isActive={matrixActive && isDarkMode} />
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

      {/* Music play/pause button - below resume button */}
      <button 
        className='music-play-pause-btn'
        onClick={() => {
          setIsMusicPlaying(!isMusicPlaying);
          controlSpotify(isMusicPlaying ? 'pause' : 'play');
        }}
        aria-label={isMusicPlaying ? 'Pause' : 'Play'}
      >
        {isMusicPlaying ? <BsPauseFill /> : <BsPlayFill />}
      </button>

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
      <Matrix onToggle={(newState) => {
        // Only allow activation in dark mode
        if (newState && !isDarkMode) {
          return;
        }
        setMatrixActive(newState);
      }} isActive={matrixActive} />
      <Footer />
    </div>
    </>
  )
}

export default App
