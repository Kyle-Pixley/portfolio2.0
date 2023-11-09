import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav.jsx'
import Lightdark from './Components/lightdark/lightdark.jsx'
import Home from './Components/Home/Home.jsx'
import Resume from './Components/Resume/Resume.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'

import './App.css'


function App() {

const [isDarkMode, setIsDarkMode] = useState(true);

const [activeComponent, setActiveComponent] = useState('home');

const handleButtonClick = (componentName) => {
  setActiveComponent(componentName);
};

const toggleDarkMode = () => {
  console.log('toggleDarkMode')
  setIsDarkMode(!isDarkMode);
  console.log(isDarkMode)
};

const handleHomeClassName = () => {
  if (isDarkMode && activeComponent === 'home'){
    return 'dark-mode-buttons active-button'
  } else if (!isDarkMode && activeComponent ==='home'){
    return 'light-mode-buttons active-button'
  } else if (!isDarkMode && activeComponent !== 'home'){
    return 'light-mode-buttons'
  } else if (isDarkMode && activeComponent !== 'home'){
    return 'dark-mode-buttons'
  } else { return 'cheese' }
}

const handleResumeClassName = () => {
  if (isDarkMode && activeComponent === 'resume') {
    return 'dark-mode-buttons active-button'
  } else if (isDarkMode && activeComponent !== 'resume'){ return 'dark-mode-buttons'
  } else if (!isDarkMode && activeComponent === 'resume') {
    return 'light-mode-buttons active-button'
  } else if (!isDarkMode && activeComponent !== 'resume') {
    return 'light-mode-buttons'
  } else { return 'cheese'}
}

const handleProjectsClassName = () => {
  if (isDarkMode && activeComponent === 'projects') {
    return 'dark-mode-buttons active-button'
  } else if (isDarkMode && activeComponent !== 'projects'){ return 'dark-mode-buttons'
  } else if (!isDarkMode && activeComponent === 'projects') {
    return 'light-mode-buttons active-button'
  } else if (!isDarkMode && activeComponent !== 'projects') {
    return 'light-mode-buttons'
  } else { return 'cheese'}
}

const handleContactClassName = () => {
  if (isDarkMode && activeComponent === 'contact') {
    return 'dark-mode-buttons active-button'
  } else if (isDarkMode && activeComponent !== 'contact'){ return 'dark-mode-buttons'
  } else if (!isDarkMode && activeComponent === 'contact') {
    return 'light-mode-buttons active-button'
  } else if (!isDarkMode && activeComponent !== 'contact') {
    return 'light-mode-buttons'
  } else { return 'cheese'}
}


  return (
    <div id={isDarkMode ? 'body-dark' : 'body-light'}>
      <div id={isDarkMode ? 'outer-frame-dark' : 'outer-frame-light'}
      >
        <div id='inner-frame' >
          <Header 
            toggleDarkMode={toggleDarkMode} 
            isDarkMode={isDarkMode}
          />
          <Nav isDarkMode={isDarkMode}/>
          <div id='spacer'></div>
          <div id='button-parent'>

              <button
                onClick={() => handleButtonClick('home')}
                id='home-link' 

                className={handleHomeClassName()}
                href=''>
                Home
                {activeComponent === 'home' && <span className={isDarkMode ? 'active-bullet-dark' : 'active-bullet-light'}
                ></span>}

              </button>

              <button 
                onClick={() => handleButtonClick('resume')}
                id='resume-link' 

                className={handleResumeClassName()}
                href=''>
                  Resume
                  {activeComponent === 'resume' && <span className={isDarkMode ? 'active-bullet-dark' : 'active-bullet-light'}></span>}

              </button>

              <button 
                onClick={() => handleButtonClick('projects')}
                id='projects-link' 

                className={handleProjectsClassName()}
                href=''>
                  Projects
                  {activeComponent === 'projects' && <span className={isDarkMode ? 'active-bullet-dark' : 'active-bullet-light'}></span>}

              </button>

              <button 
                onClick={() => handleButtonClick('contact')}
                id='contact-link' 
                className={handleContactClassName()}
                href=''>
                  Contact
                  {activeComponent === 'contact' && <span className={isDarkMode ? 'active-bullet-dark' : 'active-bullet-light'}></span>}

              </button>
            </div>

            {activeComponent === 'home' && <Home isDarkMode={isDarkMode}/>}
            {activeComponent === 'resume' && <Resume isDarkMode={isDarkMode}/>}
            {activeComponent === 'projects' && <Projects isDarkMode={isDarkMode}/>}
            {activeComponent === 'contact' && <Contact isDarkMode={isDarkMode} />}

            

        </div>
      </div>
      <Lightdark  
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
      />
    </div>
  )
}

export default App;