import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {



    return (
        <div className='content'>


            <div className='content_img' >
                <img className='content__img' src='https://www.ciee.org/sites/default/files/content/page/hero/image/nyc-sunset.jpg'></img>
            </div>


            <ProfileInfo />

            <MyPosts posts={props.state.posts} />

        </div>
    )

}


export default Profile;
