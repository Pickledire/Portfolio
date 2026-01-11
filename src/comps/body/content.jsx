import React from 'react'
import './content.css'
import Bento from '../cards/bento'

const Content = ({ bentoId, audioVolume = 1 }) => {
  return (
    <>
      <div className='bento-section' id={bentoId}>
        <Bento audioVolume={audioVolume} />
      </div>
      <div className='content'>
        {/* Additional content can go here */}
      </div>
    </>
  )
}

export default Content