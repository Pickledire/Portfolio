import React, { useState } from 'react'
import './content.css'
import ProjectCard from '../cards/projectcard'
import InfoCard from '../cards/infocard'
import LocationCard from '../cards/locationcard'

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

      {/* New Bento-style section */}
      <div className='content-container-2'>
        <div className='bento-header'>
          <span className='site-label'>MY SITE</span>
          <h2 className='bento-title'>
            Explore, experiment<br />
            <span className='highlight-text'>&& say hello</span>
          </h2>
        </div>

        <div className='bento-grid'>
          <div className='bento-card uses-card'>
            <div className='card-header'>
              <span className='card-label'>Uses</span>
            </div>
            <div className='card-icons'>
              <div className='icon-item'>
                <div className='icon icon-vscode'></div>
              </div>
              <div className='icon-item'>
                <div className='icon icon-figma'></div>
              </div>
              <div className='icon-item'>
                <div className='icon icon-chrome'></div>
              </div>
            </div>
            <p className='card-description'>
              Check out my favorite tools and spots around the web.
            </p>
          </div>

          <div className='bento-card guestbook-card'>
            <div className='card-header'>
              <span className='card-label'>Guestbook</span>
            </div>
            <div className='guestbook-visual'>
              <div className='message-bubble'></div>
              <div className='message-bubble'></div>
            </div>
            <p className='card-description'>
              Let me know you were here
            </p>
          </div>

          <div className='bento-card music-card'>
            <div className='card-header'>
              <span className='card-label'>Recent Favorite</span>
            </div>
            <div className='music-info'>
              <div className='album-cover'></div>
              <div className='track-info'>
                <p className='track-title'>Currently Coding To</p>
                <p className='artist-name'>Lofi Hip Hop Beats</p>
                <p className='album-name'>Focus Playlist</p>
              </div>
            </div>
          </div>

          <div className='bento-card contact-card'>
            <div className='card-header'>
              <span className='card-label'>Get In Touch</span>
            </div>
            <div className='contact-visual'>
              <div className='contact-icon'></div>
            </div>
            <p className='card-description'>
              Ready to collaborate? Let's create something amazing together.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content