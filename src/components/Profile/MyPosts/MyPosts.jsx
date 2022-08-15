import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';


const MyPosts = () => {
    return (



        <div className='content__posts'>
            <div className='content__posts_top-text'>
                My posts
            </div>



            <div className="form-style ">
                <form>



                    <textarea className="field" placeholder=" your news"></textarea>

                    <input type="submit" value="Send" />
                </form>
            </div>




            <div className='posts'>
                <Post />
                <Post />
            </div>
        </div>


    )

}


export default MyPosts;
