import { useState } from 'react'
import './App.css'
import Sidebar from './comps/sidebar/sidebar'
import Header from './comps/header/header'
import Content from './comps/body/content'
import Footer from './comps/footer/footer'
import './comps/nav/nav.css'

function App() {
 
  return (
    <>
    
    <div className='app'>
      <div className='nav'>
        <button className='nav-button'>Home</button>
        <button className='nav-button'>Projects</button>
        <button className='nav-button'>Contact</button>
        <button className='nav-button'>Resume</button>
      </div>
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App
