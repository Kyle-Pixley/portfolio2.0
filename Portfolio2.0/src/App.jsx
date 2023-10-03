import { useEffect, useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav.jsx'
import Lightdark from './Components/lightdark/lightdark.jsx'
import Home from './Components/Home/Home.jsx'
import Resume from './Components/Resume/Resume.jsx'
import './App.css'


function App() {

const [isDarkMode, setIsDarkMode] = useState(true);

const [activeComponent, setActiveComponent] = useState('home');

const handleButtonClick = (componentName) => {
  setActiveComponent(componentName);
}

const toggleDarkMode = () => {
  console.log('toggleDarkMode')
  setIsDarkMode(!isDarkMode);
  console.log(isDarkMode)
};

const darkModeStyle = {
  border: '1px solid white',
}

const lightModeStyle = {
  border: '1px solid black',
}

const style = isDarkMode ? darkModeStyle : lightModeStyle

  return (
    <div id={isDarkMode ? 'body-dark' : 'body-light'}>
      <div id='outer-frame'
        style={style}
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

                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}

                // className={activeComponent === 'home' ? 'active-button':''}
                //TODO ^ do these classes as an if/else in a seperate function::                if isdark and active classname='dark-mode-button active-button' / and so on 

                href=''>
                Home
              </button>

              <button 
                onClick={() => handleButtonClick('resume')}
                id='resume-link' 
                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
                href=''>
                  Resume
              </button>

              <button 
                onClick={() => handleButtonClick('projects')}
                id='projects-link' 
                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
                href=''>
                  Projects
              </button>

              <button 
                onClick={() => handleButtonClick('contact')}
                id='contact-link' 
                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
                href=''>
                  Contact
              </button>
            </div>

            {activeComponent === 'home' && <Home isDarkMode={isDarkMode}/>}
            {activeComponent === 'resume' && <Resume isDarkMode={isDarkMode}/>}
            

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