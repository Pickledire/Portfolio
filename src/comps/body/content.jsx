import React, { useState } from 'react'
import './content.css'
import ProjectCard from '../cards/projectcard'
import InfoCard from '../cards/infocard'
import LocationCard from '../cards/locationcard'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiGit, SiGithub, SiVercel, SiFigma } from 'react-icons/si'
import Skills from '../cards/skills'
import Bento from '../cards/bento'

const Content = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  // Project data with README.md paths
  const projects = [
    {
      images: ['/projects/partiva/partivasite.png'],
      title: 'Partiva',
      folder: 'partiva',
      readmePath: '/projects/partiva/README.md'
    },
    {
      images: ['/projects/rpg/rpggame.png'],
      title: 'RPG Game',
      folder: 'rpg',
      readmePath: '/projects/rpg/README.md'
    },
    {
      images: ['/projects/sidious/sidiouspage.png'],
      title: 'Sidious Project',
      folder: 'sidious',
      readmePath: '/projects/sidious/README.md'
    },
    {
      images: ['/projects/folio/folio.png'],
      title: 'Portfolio',
      folder: 'folio',
      readmePath: '/projects/folio/README.md'
    },
    {
      images: ['/projects/staada/staadasite.png'],
      title: 'Staada Project',
      folder: 'staada',
      readmePath: '/projects/staada/README.md'
    },
    {
      images: ['/projects/vader/vadersite.png'],
      title: 'Vader Project',
      folder: 'vader',
      readmePath: '/projects/vader/README.md'
    }
  ]

  return (
    <div className='content'>
      <div className='content-container' id='2'>
        <ProjectCard 
          className='grid-area-a' 
          projects={projects}
          currentProjectIndex={currentProjectIndex}
          onProjectChange={setCurrentProjectIndex}
        />
        <InfoCard 
          className='grid-area-b'
          currentProject={projects[currentProjectIndex]}
        />
        <LocationCard className='grid-area-c'/>
      </div>
      <div className='content-container-2'>
      </div>
      <Bento />
    </div>
  )
}

export default Content