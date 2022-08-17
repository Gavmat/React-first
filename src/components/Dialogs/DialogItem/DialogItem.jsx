import React from 'react';
import { NavLink } from "react-router-dom";
import './../Dialogs.css'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div activeClassName={({ isActive }) => (isActive ? 'Dialogs-users'.active : '')}  >
            <NavLink to={path}>{props.name} </NavLink>
        </div >
    )
}





export default DialogItem;