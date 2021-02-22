import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'




const Layout = (props) => {
  
  const logOut = () => {
    axios.get(process.env.REACT_APP_BACKEND_URL + 'persons/logout',  { withCredentials: true })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    window.location.replace('/login')
  }


  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
       Home
        </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/home"} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/signup"} className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to={"/profile"} className="nav-link">Profile</Link>
        </li>
        <li className='nav-item '>
        <button 
          onClick={logOut}
        >
          Log out
        </button>
          </li>
      </div>


    </nav>
    <div className="container mt-3">
      <div>
      {props.children}
      </div>
    </div>
  </div>
  )
}

export default Layout
