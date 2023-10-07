import React, { useState, useEffect } from 'react';
import './lightdark.css';

function LightDark({ toggleDarkMode }) {

return (
    <button 
    className='toggle-switch'>
        <label id="buttonText">
            <input
            type='checkbox'
            onChange={toggleDarkMode}
            />
            <span className='slider'></span>
        </label>
    </button>
    );
}

export default LightDark;