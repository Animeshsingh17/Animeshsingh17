import React from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
//React Routing
function Nav() {
  // const navStyle = {
  //   color: "white",
  // };
  return (
    <nav>
      <h3>logo</h3>
      <ul className="nav-link">
        <li>
          <NavLink
            className="nav-bar-link"
            to="/shop"
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-bar-link"
            to="/user"
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
          >
            User
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-bar-link"
            to="/About"
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-bar-link"
            to="/filter"
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
          >
            filter
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-bar-link"
            to="/contact"
            style={({ isActive }) => {
              return { Color: isActive ? "skyblue" : "" };
            }}
          >
            contact
          </NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Nav;
