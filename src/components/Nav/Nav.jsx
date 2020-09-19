import React from "react";
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact activeStyle={{textDecoration: 'underline'}} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{textDecoration: 'underline'}} to="/about">About Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
