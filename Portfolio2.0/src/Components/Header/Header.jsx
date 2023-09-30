import React from 'react'
import "./Header.css"

function Header({ isDarkMode }) {

  const darkMode = {
    color: '#ebedf0',
  };

  const lightMode = {
    color: '#0a0a0a',
  };

  const style = isDarkMode ? darkMode : lightMode;

  return (
    <div>
            <h1 id="header-name" 
              style={style}
            >Kyle Pixley</h1>
            <p  id='header-title'
              style={style}
            >Software Engineer</p>
    </div>
  )
}

export default Header