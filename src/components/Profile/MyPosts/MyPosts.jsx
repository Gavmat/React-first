import React from 'react';
import './MyPosts.css'
import Post from './Post/Post';


const MyPosts = (props) => {


    // let posts = [
    //     { id: 1, message: 'Hi , How Are you?', likes: 19 },
    //     { id: 2, message: 'Its my first post!', likes: 4 },
    //     { id: 3, message: 'Im from NNovgorod!', likes: 7 },
    // ]


    let postsElements = props.posts.map(p => <Post message={p.message} id={p.id} likes={p.likes} />);


    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (


        <div className='content__posts'>
            <div className='content__posts_top-text'>
                My posts
            </div>

            <div className="form-style ">
                <form>

                    <textarea onChange={onPostChange} ref={newPostElement} className="field"
                        value={props.newPostText} />


                    <button type="button" onClick={addPost}>Send</button>

                </form>
            </div>

            <div className='posts'>
                {postsElements}

            </div>
        </div>


    )

}


export default MyPosts;
