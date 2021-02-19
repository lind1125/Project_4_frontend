import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Layout = (props) => {
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


        {/* {
          currentUser && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
                </Link>
            </li>
          )
        } */}

      </div>
{/* 
        {currentUser ?
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={'/profile'} className="nav-link">
                {currentUser.username}
              <FontAwesomeIcon className='ml-2' icon={['fas', 'user']} />
              </Link>
            </li>
            <li className="nav-item">
              <a  href="/" className="nav-link" onClick={logOut}>
                Log out
                <FontAwesomeIcon className='ml-2' icon={['fas', 'user-slash']} />
              </a>
            </li>
          </div> : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to= className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to= className="nav-link">
                  Signup
                </Link>
              </li>
          </div>)} */}

    </nav>
    <div className="container mt-3">
      {props.children}
    </div>
  </div>
  )
}

export default Layout
