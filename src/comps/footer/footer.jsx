import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer' id='3'>
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/yourname">LinkedIn Profile</a></p>
      <p>GitHub: <a href="https://github.com/yourusername">GitHub Profile</a></p>

    </div>
  )
}

export default Footer