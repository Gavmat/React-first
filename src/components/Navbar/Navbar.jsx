import React from 'react';
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-item'>
                <NavLink to='/profile' activeClassName={({ isActive }) => (isActive ? 'nav-item'.active : '')}>
                    Profile
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/dialogs' activeClassName={({ isActive }) => (isActive ? 'nav-item'.active : '')} >
                    Messages
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/news' activeClassName={({ isActive }) => (isActive ? 'nav-item'.active : '')}>
                    News
                </NavLink>
            </div>
            <div className='nav-item'>
                <NavLink to='/music' activeClassName={({ isActive }) => (isActive ? 'nav-item'.active : '')}>
                    Music
                </NavLink>
            </div>
            <div className='nav-item-setting '>
                <NavLink to='/settings' activeClassName={({ isActive }) => (isActive ? 'nav-item-setting'.active : '')}>
                    Settings
                </NavLink>
            </div>
        </nav >
    )

}


export default Navbar;
