import React from 'react'
import './bento.css'

const Bento = () => {
  return (


<div className='bento-container'>
<div className='bento-header'>
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
      <div className='icon- item'>
        <div className='ico n icon-figma'></div>
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
  )
}

export default Bento