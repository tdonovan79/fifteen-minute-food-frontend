import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/cart" className="navLink">Cart</NavLink>
      </li>
      <li>
        <NavLink to="/login" className="navLink">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" className="navLink">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile" className="navLink">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/search" className="navLink">Search</NavLink>
      </li>
    </ul>
  )
};

export default NavBar; 