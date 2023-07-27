// eslint-disable-warnings

import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          {/* <NavLink to="/search" activeStyle className="nav-find">
            Find and Edit
          </NavLink>
          <NavLink to="/home" activeStyle className="nav-find">
            Add
          </NavLink>
          <NavLink to="/app" activeStyle className="nav-find">
            View Data
          </NavLink> */}
          <NavLink to="/" activeStyle className="nav-find">
            Login
          </NavLink>
          <NavLink to="/signUp" activeStyle className="nav-find">
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
