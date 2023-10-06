import React from 'react'
import './Contact.css'

function Contact({ isDarkMode }) {
  return (
    <div id='contact-parent'>

        <div id={isDarkMode ? 'contact-dark' : 'contact-light'} className='email'>
            <span id='email-1' className='email-piece'>kyle7</span>

            <span id='email-2' className='email-piece'>pixley</span>

            <span id='email-3' className='email-piece'>@gmail</span>

            <span id='email-4' className='email-piece'> .com</span>

        </div>

    </div>
  )
}

export default Contact