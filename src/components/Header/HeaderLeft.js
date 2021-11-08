import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
//import gameForce from '../../images/';

function HeaderLeft() {
    return (
        <div className="header-left-container">
            <Link to='/'>
                <img src='/images/game-force-logo.png' alt=""/>
            </Link>
        </div>
    )
}

export default HeaderLeft
