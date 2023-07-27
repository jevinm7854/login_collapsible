// eslint-disable-warnings
import Cookies from "react-cookie/cjs/Cookies";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavBarOpt = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  return (
    <>
      {cookies.get("Rights") === undefined && navigate("/")}
      {cookies.get("Rights") === "Full" && (
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink
              to={{
                pathname: "/search",
              }}
              activeStyle
              className="nav-find"
            >
              Find and Edit
            </NavLink>
            <NavLink
              to={{
                pathname: "/home",
              }}
              activeStyle
              className="nav-find"
            >
              Add
            </NavLink>
            <NavLink
              to={{
                pathname: "/app",
              }}
              activeStyle
              className="nav-find"
            >
              View Data
            </NavLink>
            <NavLink to="/" activeStyle className="nav-find">
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      )}

      {cookies.get("Rights") === "Semi" && (
        <Nav>
          <Bars />

          <NavMenu>
            {/* <NavLink to="/search" activeStyle className="nav-find">
              Find and Edit
            </NavLink>
            <NavLink to="/home" activeStyle className="nav-find">
              Add
            </NavLink> */}
            <NavLink
              to={{
                pathname: "/app",
              }}
              activeStyle
              className="nav-find"
            >
              View Data
            </NavLink>
            <NavLink to="/" activeStyle className="nav-find">
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      )}

      {cookies.get("Rights") === "None" && (
        <Nav>
          <Bars />

          <NavMenu>
            {/* <NavLink to="/search" activeStyle className="nav-find">
              Find and Edit
            </NavLink>
            <NavLink to="/home" activeStyle className="nav-find">
              Add
            </NavLink> */}
            {/* <NavLink to="/app" activeStyle className="nav-find">
              View Data
            </NavLink> */}
            <NavLink to="/" activeStyle className="nav-find">
              Log Out
            </NavLink>
          </NavMenu>
        </Nav>
      )}
    </>
  );
};

export default NavBarOpt;
