import React from 'react'
import './Resume.css'
import ResumeDownload from '/src/assets/resume-download.png';

//! why does this always give me trouble??????^^^^^^

function Resume({ isDarkMode }) {
  return (
    <>
    <div id='resume-parent'>
        <div id={isDarkMode ? 'resume-dark' : 'resume-light'}>

        My varied work history as a chef, 

        pizza delivery driver, 

        and financial administrator has uniquely prepared me for web development. 

        My culinary background instilled creativity and attention to detail, 

        while my delivery experience taught me efficiency and time management. 

        As a financial administrator, 

        I developed an analytical mindset. 

        These skills now empower me to tackle web development challenges effectively and innovatively.
        
        </div>
    </div>
        <div id='download-resume'>
              <p id={isDarkMode ? 'download-text-dark' : 'download-text-light'}>Download Resume</p>
          <a href='./src/assets/Resume.pdf' download>
              <img id={isDarkMode ? 'download-image-dark' : 'download-image-light'} src={ResumeDownload} alt='download'/>
          </a>
        </div>
    </>
  )
}

export default Resume