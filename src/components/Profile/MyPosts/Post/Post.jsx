import React from 'react';
import './Post.css'


const Post = (props) => {
    return (



        <div className='item'>

            <div className='item__content'>

                <img className='item__ava' src="http://oboi.ws/filters/lomo_29_2600_oboi_ciklop_iz_ljudej_iks_2560x1920.jpg" alt="" />

                <div className='item__text'>
                    {props.message}
                </div>
            </div>

            <div className='item__like'>

                <span>like</span>
                {props.likes}
            </div>



        </div>



    )

}


export default Post;
