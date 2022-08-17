import React from 'react';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import './Dialogs.css'
import Message from './Message/Message';



const Dialogs = (props) => {


    // let dialogs = [
    //     { id: 1, name: 'Matvey' },
    //     { id: 2, name: 'Vadim' },
    //     { id: 3, name: 'Artem' },
    //     { id: 4, name: 'Alyona' },
    //     { id: 5, name: 'Bro' },
    // ]



    // let messages = [
    //     { id: 1, message: 'Hi, man!' },
    //     { id: 2, message: 'Yo!' },
    //     { id: 3, message: 'Be, cool!!!!' },
    // ]

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);


    return (
        <div className='Dialogs-container'>
            <div className='Dialogs-users'>

                {dialogsElements}

            </div>

            <div className='Messages'>
                {messagesElements}
            </div>

        </div >




    )


}


export default Dialogs;