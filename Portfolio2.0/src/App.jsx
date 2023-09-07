import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav.jsx'
import Lightdark from './Components/lightdark/lightdark.jsx'
import './App.css'

function App() {

  return (
    <>
      <div id='outer-frame'>
        <div id='inner-frame'>
          <Header />
          <Nav />
          <div id='spacer'></div>
          <div id='button-parent'>
              <button id='home-link' href=''>Home</button>
              <button id='resume-link' href=''>Resume</button>
              <button id='projects-link' href=''>Projects</button>
              <button id='contact-link' href=''>Contact</button>
            </div>
        </div>
      </div>
      <Lightdark />
    </>
  )
}

export default App;