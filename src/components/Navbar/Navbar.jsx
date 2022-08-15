import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-item'>
                <a>Profile</a>
            </div>

            <div className='nav-item'>
                <a>Messages</a>
            </div>

            <div className='nav-item'>
                <a>News</a>
            </div>
            <div className='nav-item'>
                <a>Music</a>
            </div>
            <div className='nav-item-setting '>
                <a>Settings</a>
            </div>
        </nav>
    )

}


export default Navbar;
