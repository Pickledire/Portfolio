import { useState } from 'react'
import './App.css'
import Sidebar from './comps/sidebar/sidebar'
import Header from './comps/header/header'
import Content from './comps/body/content'
import Footer from './comps/footer/footer'
import './comps/nav/nav.css'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { BsFileCodeFill } from 'react-icons/bs'
import { BsEnvelopeFill } from 'react-icons/bs'
import { BsFilePdfFill } from 'react-icons/bs'
function App() {
 
  return (
    <>
    
    <div className='app'>
      <div className='nav'>
        <button className='nav-button'><BsFillHouseDoorFill /></button>
        <button className='nav-button'><BsFileCodeFill /></button>
        <button className='nav-button'><BsEnvelopeFill /></button>
        <button className='nav-button'><BsFilePdfFill /></button>
      </div>
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App
