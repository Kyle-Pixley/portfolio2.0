import React from 'react'
import './Resume.css'

function Resume({ isDarkMode }) {
  return (
    <div id='resume-parent'>
        <div id={isDarkMode ? 'resume-dark' : 'resume-light'}>
            resume hahahaha
        </div>
    </div>
  )
}

export default Resume