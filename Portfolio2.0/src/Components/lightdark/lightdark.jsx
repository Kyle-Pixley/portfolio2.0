import React, { useState, useEffect } from 'react';
import './lightdark.css';

function LightDark() {
const [isDarkMode, setIsDarkMode] = useState(true);

const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
};

const darkModeStyle = {
    backgroundColor: '#0a0a0a',
    color: '#ebedf0',
};

const lightModeStyle = {
    backgroundColor: '#ebedf0',
    color: '#0a0a0a',
};

const style = isDarkMode ? darkModeStyle : lightModeStyle;

useEffect(() => {
    for (const property in style) {
    document.body.style[property] = style[property];
    }
}, [style]);

const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode';

return (
    <button onClick={toggleDarkMode} className='toggle-switch'>
    <label>
        {buttonText}
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