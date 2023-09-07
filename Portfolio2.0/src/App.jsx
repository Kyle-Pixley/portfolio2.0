import { useState } from 'react'
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/nav.jsx'
import './App.css'

function App() {

  return (
    <>
      <div id='outer-frame'>
        <div id='inner-frame'>
          <Header />
          <Nav />
        </div>
      </div>
    </>
  )
}

export default App;