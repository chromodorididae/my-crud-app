// import logo from './logo.svg';
// import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

// import { userInfo } from './services/userService';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';

// import Register from './pages/users/Register'
// import Login from './pages/users/Login'

//edit post
import EditPost from './pages/posts/Edit';
//view all posts
import IndexPost from './pages/posts/Index';
//create post
import NewPost from './pages/posts/New';
//view single post
import ShowPost from './pages/posts/Show';


//edit profile information
import EditUser from './pages/users/Edit';
//view all user information (name, email, address)
//page title: team members - employees and mgmt
import IndexUser from './pages/users/Index';
//view single user information (name, email, address)
import ShowUser from './pages/users/Show';

function App() {
  return (
    <div className="App">
      <title>My CRUD App</title>
      <Navbar />
    </div>
  );
}

export default App;
