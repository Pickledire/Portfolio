import React from 'react'
import './header.css'
import '@fontsource/press-start-2p'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import Skills from '../cards/skills'

const Header = ({ id }) => {
  const openGithub = () => {
    window.open('https://github.com/Pickledire', '_blank', 'noopener,noreferrer');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/brenden-edwards-889b141a9/', '_blank', 'noopener,noreferrer');
  };

  const openTwitter = () => {
    window.open('https://x.com/Pickledire', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <div className='header' id={id}>

        <img src={'/brenden.png'} alt="Brenden Edwards" className='brenden-image' />


      <div className='info'>
          <div className='info-text'>
            <h2 className='info-title'><span className='sauce'>Future</span> <span className='underlined'>Frontend Developer</span></h2>
            <span>I create beautiful and functional websites.</span> <br />
            <span>📍 USA, Arkansas</span>
          </div>
          <div className='btn-container'>
            <button className='btn-header' onClick={openGithub}><BsGithub /></button>
            <button className='btn-header' onClick={openLinkedIn}><BsLinkedin /></button>
            <button className='btn-header' onClick={openTwitter}><BsTwitterX /></button>
          </div>
          
        </div>
        <Skills />
    </div>
    </>
  )
}

export default Header
