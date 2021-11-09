import React from "react";
import './Header.css';

const Header = () => {

    return (
        <div className='header'>
            <a href='Help' className='headerButton'> Help </a>
            <a href='Breathing' className='headerButton'> Breathing </a>
            <a href='Grounding' className='headerButton'> Grounding </a>
            <a href='Guidance' className='headerButton'> Guidance </a>

        </div>
    )
}

export default Header;