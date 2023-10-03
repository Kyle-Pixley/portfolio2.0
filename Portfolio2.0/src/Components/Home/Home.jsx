import React from 'react'
import './Home.css'

function Home({ isDarkMode }) {
  return (
    <div id='bio-parent'>
        <p id={isDarkMode ? 'bio-dark' : 'bio-light'}>Hello, I'm Kyle, and my passion for coding was sparked when I explored web development online. A friend recommended a web development bootcamp, and I eagerly enrolled. Since then, my coding enthusiasm has grown immensely, and I'm committed to further improving my skills in this dynamic field.</p>
    </div>
  )
}

export default Home