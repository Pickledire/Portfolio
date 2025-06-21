import React, { useState } from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openGithub = () => {
    window.open('https://github.com/Pickledire', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/brenden-edwards-889b141a9/', '_blank');
  };

  const openTwitter = () => {
    window.open('https://x.com/Pickledire', '_blank');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
    // You can add your form submission logic here
  };

  return (
    <>
      <div className='footer' id='3'>
        <div className='footer-content'>
          <h1>FROM CONCEPT TO <span className='creation-highlight'>CREATION</span></h1>
          <h2>LET'S MAKE IT HAPPEN!</h2>
          <button className='get-in-touch-btn' onClick={openModal}>
            Get In Touch →
          </button>
          <p className='availability'>I'm available for full-time roles & freelance projects.</p>
          <p className='description'>I thrive on crafting dynamic web applications, and delivering seamless user experiences.</p>
          <div className='gradient-line'></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
              <h3>Fill a form</h3>
              <button className='close-btn' onClick={closeModal}>
                <IoMdClose />
              </button>
            </div>
            
            <div className='social-links'>
              <button className='social-btn' onClick={openLinkedIn}><BsLinkedin /></button>
              <button className='social-btn' onClick={openGithub}><BsGithub /></button>
              <button className='social-btn' onClick={openTwitter}><BsTwitterX /></button>
            </div>

            <form className='contact-form' onSubmit={handleSubmit}>
              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' id='name' name='name' placeholder='Your name' required />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' id='email' name='email' placeholder='your.email@example.com' required />
                </div>
              </div>
              
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea 
                  id='message' 
                  name='message' 
                  placeholder='What would you like to discuss?' 
                  required
                  rows={5}
                ></textarea>
                <span className='char-count'>0/1000</span>
              </div>

              <button type='submit' className='send-btn'>
                📧 Send message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer