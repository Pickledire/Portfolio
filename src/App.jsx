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

function App() {
  const [activeSection, setActiveSection] = useState('1');

  // Function to scroll to element smoothly
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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

  // Scroll detection to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['1', '2', '3'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  return (
    <>
    
    <div className='app'>
      <div className='nav'>
        <button 
          onClick={() => scrollToElement('1')} 
          className={`nav-button ${activeSection === '1' ? 'active' : ''}`}
        >
          Home
        </button>
        <button 
          onClick={() => scrollToElement('2')} 
          className={`nav-button ${activeSection === '2' ? 'active' : ''}`}
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToElement('3')} 
          className={`nav-button ${activeSection === '3' ? 'active' : ''}`}
        >
          Contact
        </button>
        <button onClick={() => downloadResume('resume.pdf')} className='nav-button'>Resume</button>
      </div>
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App
