import React from 'react'
import './Home.css'

function Home({ isDarkMode }) {
  return (
    <div id='bio-parent'>
        <p id={isDarkMode ? 'bio-dark' : 'bio-light'} className='home-text-parent'>
  <span id='home-text-1' className='home-text-piece'>
        Hello, I'm Kyle, 
  </span>
  <span id='home-text-2' className='home-text-piece'>
        and my passion for coding was sparked when I explored web development online. 
  </span>
  <span id='home-text-3' className='home-text-piece'>
        A friend recommended a web development bootcamp, 
  </span>
  <span id='home-text-4' className='home-text-piece'>
        and I eagerly enrolled.
  </span>
  <span id='home-text-5' className='home-text-piece'>
        Since then, 
  </span>
  <span id='home-text-6' className='home-text-piece'>
        my coding enthusiasm has grown immensely, 
  </span>
  <span id='home-text-7' className='home-text-piece'>
        and I'm committed to further improving my skills in this dynamic field.
  </span>
</p>

{/* //! Currently the every line ends on where I decided to split each line and I don't think there is a way to fix that without adding a span for EVERY SINGLE WORD!!! of which I will do
//TODO do it!! it will not take that long  */}

    </div>
  )
}

export default Home