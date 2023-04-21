import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/NavHeader.css";
export default function NavHeader() {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "check on" : "check")}
      >
        Home
      </NavLink>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <NavLink
        to="/storylist"
        className={({ isActive }) => (isActive ? "check on" : "check")}
      >
        Story
      </NavLink>
      <hr />
    </div>
  );
}
