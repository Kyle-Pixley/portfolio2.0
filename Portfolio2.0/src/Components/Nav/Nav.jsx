import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav({ isDarkMode }) {

    return (

        <nav>
            <a 
                id={isDarkMode ? 'dark-mode-links' : 'light-mode-links'}
                href='https://www.linkedin.com/in/  kyle-pixley-257686279/'   target='_blank'>
                    Linkin
            </a>
            <a 
                id={isDarkMode ? 'dark-mode-links' : 'light-mode-links'}
                href='https://github.com/Kyle-Pixley' target='_blank'>
                    Github
            </a>
        </nav>
    )
}

export default Nav