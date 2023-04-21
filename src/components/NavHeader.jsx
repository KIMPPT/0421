import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavHeader.css";
export default function NavHeader() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "checked" : "normal")}
      >
        Home
      </NavLink>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <NavLink
        to="/storylist"
        className={({ isActive }) => (isActive ? "checked" : "normal")}
      >
        Story
      </NavLink>
      <hr />
    </div>
  );
}
