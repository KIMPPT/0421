import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import "../css/storylist.css";
export default function StoryList() {
  let { state } = useContext(DataContext);
  let fruitname = state.fruit.map((text) => text.name);
  return (
    <div>
      <h1>StoryList</h1>
      <br />
      {fruitname.map((fruit, i) => (
        <NavLink
          to={`/storylist/${fruit}`}
          key={i}
          className={({ isActive }) => (isActive ? "storynav on" : "storynav")}
        >
          {fruit}Story
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}
