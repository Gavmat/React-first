
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/State';
import { subscribe } from './redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {


    root.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>
    );
};



rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

