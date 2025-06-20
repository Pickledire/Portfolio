import { useState } from 'react'
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
 
  return (
    <>
    
    <div className='app'>
      <div className='nav'>
        <button onClick={() => scrollToElement('1')} className='nav-button'>Home</button>
        <button onClick={() => scrollToElement('2')} className='nav-button'>Projects</button>
        <button onClick={() => scrollToElement('3')} className='nav-button'>Contact</button>
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
