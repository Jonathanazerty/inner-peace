import React from "react";
import './Header.css';

const Header = () => {
    
    return (
        <div className='header'>
        <a href='Help.js' className='headerButton'> Help </a>
        <a href='Breathing.js' className='headerButton'> Breathing </a>
        <a href='Grounding.js' className='headerButton'> Grounding </a>
      </div>
    )
}

export default Header;