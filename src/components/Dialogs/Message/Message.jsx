import React from 'react';
import { NavLink } from "react-router-dom";
import './../Dialogs.css'



const Message = (props) => {
    return (
        <div className="message"> {props.message}</div>
    )
}




export default Message;