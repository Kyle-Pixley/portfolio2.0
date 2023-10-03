import React, { useState, useEffect } from 'react';
import './lightdark.css';

function LightDark({ toggleDarkMode }) {
// const [isDarkMode, setIsDarkMode] = useState(true);

// ! Use state is in App.jsx now to be able to change its value from here 

// const toggleDarkMode = () => {
//     console.log('toggleDarkMode')
//     setIsDarkMode(!isDarkMode);
//     console.log(buttonText)
//     console.log(isDarkMode)
// };

const darkModeStyle = {
    backgroundColor: '#0a0a0a',
    color: '#ebedf0',
};

const lightModeStyle = {
    backgroundColor: '#ebedf0',
    color: '#0a0a0a',
};

// const style = isDarkMode ? darkModeStyle : lightModeStyle;

// useEffect(() => {
//     for (const property in style) {
//     document.body.style[property] = style[property];
//     }
// }, [style]);

// const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode';

return (
    <button 
    // onClick={toggleDarkMode}  
    //Why did it start working after I console.logged jello????

    // onChange={toggleDarkMode} 
    className='toggle-switch'>
        <label id="buttonText">
            {/* {buttonText} */}
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