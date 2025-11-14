import React from 'react'
import './header.css'
import Spline from '@splinetool/react-spline'
import '@fontsource/press-start-2p'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit, 
  SiGithub, 
  SiVercel 
} from 'react-icons/si'
import Skills from '../cards/skills'
import Bento from '../cards/bento'

const Header = ({ id }) => {
  const openGithub = () => {
    window.open('https://github.com/Pickledire', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/brenden-edwards-889b141a9/', '_blank');
  };

  const openTwitter = () => {
    window.open('https://x.com/Pickledire', '_blank');
  };

  return (
    <>
    <div className='header' id={id}>

        <img src={'/brenden.png'} alt="Brenden Edwards" className='brenden-image' />


      <div className='info'>
          <div className='info-text'>
            <h1 className='info-title'><span className='sauce'>Future</span> <span className='underlined'>Frontend Developer</span></h1>
            <span>I create beautiful and functional websites.</span> <br />
            <span>USA, Arkansas 📍</span>
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
