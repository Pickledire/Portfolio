import React from 'react'
import './header.css'
import Spline from '@splinetool/react-spline'

const Header = () => {
  return (
    <div className='header'>

      

      <Spline 
        className='spline'
        scene="https://prod.spline.design/t8b1ni1pAumesRlO/scene.splinecode"
        onLoad={() => console.log('Spline scene loaded successfully')}
        onError={(error) => console.error('Error loading Spline scene:', error)}
      />

      <div className='info'>
        
        <h1>Future Frontend Developer</h1>
        <p>I am a future frontend developer, creating beautiful and functional websites.</p>
        <div className='btn-container'>
          <button className='btn-header'>Github</button>
          <button className='btn-header'>LinkedIn</button>
          <button className='btn-header'>X</button>
        </div>
      </div>
    </div>
  )
}

export default Header
