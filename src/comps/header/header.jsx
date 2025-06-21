
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

const Header = () => {
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
    <div className='header' id='1'>
      <Spline 
        className='spline'
        scene="https://prod.spline.design/t8b1ni1pAumesRlO/scene.splinecode"
      />

      <div className='info'>
          <div className='info-text'>
            <h1 className='info-title'>Future Frontend Developer</h1>
            <span>I create beautiful and functional websites.</span>
          </div>
          <div className='btn-container'>
            <button className='btn-header' onClick={openGithub}><BsGithub /></button>
            <button className='btn-header' onClick={openLinkedIn}><BsLinkedin /></button>
            <button className='btn-header' onClick={openTwitter}><BsTwitterX /></button>
          </div>
        </div>
        <Skills />
        <div className='gradient-line-2'></div>
        </div>
    </>
  )
}

export default Header
