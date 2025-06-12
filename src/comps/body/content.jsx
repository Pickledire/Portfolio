import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div className='content'>
      <div className='content-container'>
        <div className='content-nav'>
          <button className='content-nav-btn'>Projects</button>
          <button className='content-nav-btn'>Stack</button>
          <button className='content-nav-btn'>About</button>
        </div>
        <div className='content-info'>
          <img src='./public/brenden.png' alt='brenden' className='content-info-img' />
          <img src='./public/brenden.png' alt='brenden' className='content-info-img' />
        </div>
      </div>
    </div>
  )
}

export default Content