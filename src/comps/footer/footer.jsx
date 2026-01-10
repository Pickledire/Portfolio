import React, { useState } from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitterX } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openGithub = () => {
    window.open('https://github.com/Pickledire', '_blank', 'noopener,noreferrer');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/brenden-edwards-889b141a9/', '_blank', 'noopener,noreferrer');
  };

  const openTwitter = () => {
    window.open('https://x.com/Pickledire', '_blank', 'noopener,noreferrer');
  };

  const openModal = () => {
    setIsModalOpen(true);
    setFormStatus({ type: '', message: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessageLength(0);
    setFormStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      // Using Formspree for form handling - replace YOUR_FORM_ID with actual ID
      // Sign up at https://formspree.io to get a form endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        e.target.reset();
        setMessageLength(0);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
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
                  maxLength={1000}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                ></textarea>
                <span className='char-count'>{messageLength}/1000</span>
              </div>

              {formStatus.message && (
                <div className={`form-status ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <button type='submit' className='send-btn' disabled={isSubmitting}>
                {isSubmitting ? '⏳ Sending...' : '📧 Send message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer