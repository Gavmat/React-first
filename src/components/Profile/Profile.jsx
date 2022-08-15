import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import './Profile.css'


const Profile = () => {
    return (
        <div className='content'>


            <div className='content_img' >
                <img className='content__img' src='https://www.ciee.org/sites/default/files/content/page/hero/image/nyc-sunset.jpg'></img>
            </div>



            <div className='ava-discription'>
                <div className='ava-discription__ava'>
                    <img src='https://placepic.ru/wp-content/uploads/2021/02/kinopoisk_ru_Brad_Pi-41.jpg'></img>
                </div>

                <div className='ava-discription__discription'>
                    <div className='ava-discription__discription_name'>  Matvey G.</div>
                    <div className='ava-discription__discription_age' > Age: 38</div>
                    <div className='ava-discription__discription_city' >City:  Moscow</div>
                    <div className='ava-discription__discription_education' >Education:  VGAVT</div>
                    <div className='ava-discription__discription_contact' >Web-site:  Mgavrin.com</div>

                </div>
            </div>

            <MyPosts />

        </div>
    )

}


export default Profile;
