import React, { useState } from 'react'
import './content.css'
import ProjectCard from '../cards/projectcard'
import InfoCard from '../cards/infocard'
import LocationCard from '../cards/locationcard'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si'
import Skills from '../cards/skills'
import Bento from '../cards/bento'
import AboutMeCard from '../cards/aboutmecard'

const Content = ({ id, bentoId, audioVolume = 1 }) => {
  return (
    <>
      <div className='bento-section' id={bentoId}>
        <Bento audioVolume={audioVolume} />
      </div>
      <div className='content' id={id}>
        {/* Contact content can go here */}
      </div>
    </>
  )
}

export default Content