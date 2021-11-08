import React from 'react';
import './Header.css';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';


function Header() {
    return (
        <div className="header-container">
            <HeaderLeft/>
            <HeaderRight/>
        </div>
    )
}

export default Header
