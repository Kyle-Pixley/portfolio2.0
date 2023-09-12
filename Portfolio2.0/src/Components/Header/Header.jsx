import React from 'react'
import "./Header.css"

function Header({ darkOrLight }) {

  
  return (
    <div style={darkOrLight}>
            <h1  style={darkOrLight} id="header-name">Kyle Pixley</h1>
            <p  style={darkOrLight} id='header-title'>Software Engineer</p>
    </div>
  )
}

export default Header