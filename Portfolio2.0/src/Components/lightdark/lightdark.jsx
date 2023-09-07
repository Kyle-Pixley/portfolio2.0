import React, { useState } from 'react'
import './lightdark.css'

function lightdark() {

    const [dark, setDark ] = useState(true);

    const lightDark = {
        
    }
    console.log(dark)

  return (
        <button onClick={e => setDark(false)} class = 'toggle-switch'>
            <label>
                <input type = 'checkbox'></input>
                <span class = 'slider'></span>
            </label>
        </button>
  )
}

export default lightdark;