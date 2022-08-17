import React from 'react';

import './ProfileInfo.css'


const ProfileInfo = () => {
    return (


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



    )

}


export default ProfileInfo;
