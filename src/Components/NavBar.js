import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login/Register</NavLink>
      </li>
      {/* <li>
        <NavLink to="/register">Register</NavLink>
      </li> */}
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/search">Search</NavLink>
      </li>
    </ul>
  )
};

export default NavBar; 