import React from 'react';
import CustomAudioPlayer from './audioplayer';
import Music from './music';
import './bento.css'
import GitHubActivity from './GitHubActivity'

const Bento = ({ audioVolume = 1 }) => {
  return (


<div className='bento-container'>
  <div className='bento-header'>
    <h2 className='bento-title'>
      Explore, experiment<br />
      <span className='highlight-text'>&& say hello</span>
    </h2>
  </div>

    <div className='bento-grid'>

      <div className='bento-card book-card'>
        <CustomAudioPlayer volume={audioVolume} />
      </div>

      <div className='bento-card music-card'>
        <Music playlistId={'0S78UVuLW857NQ2FaUYwTD'} /> 
      </div>

      <div className='bento-card quote-card'>
        <p>“The best way to predict the future is to invent it.”</p>
        <p>— Alan Kay</p>
      </div>

      <div className='bento-card github-card'>
        <GitHubActivity username={'Pickledire'} />
      </div>
    </div>
</div>
  )
}

export default Bento