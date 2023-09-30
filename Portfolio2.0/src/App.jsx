import { useEffect, useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav.jsx'
import Lightdark from './Components/lightdark/lightdark.jsx'
import './App.css'

function App() {

const [isDarkMode, setIsDarkMode] = useState(true);

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
                id='home-link' 
                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
                href=''>
                Home
              </button>

              <button 
                id='resume-link' 
                className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
                href=''>
                  Resume
              </button>

              <button 
              id='projects-link' 
              className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
              href=''>
                Projects
              </button>

              <button 
              id='contact-link' 
              className={isDarkMode ? 'dark-mode-buttons' : 'light-mode-buttons'}
              href=''>
                Contact
              </button>
            </div>
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