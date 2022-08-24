// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header/Header';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { addPost } from './redux/State';


const App = (props) => {



  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>

            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}
            />} />

            <Route path="/profile/*" element={<Profile

              profilePage={props.state.profilePage}
              updateNewPostText={props.updateNewPostText}
              addPost={props.addPost} />} />


          </Routes>


        </div>

      </div>

    </BrowserRouter>
  );

}
export default App;


