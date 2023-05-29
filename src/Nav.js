import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function ListSnacks({ handleClick }) {
  
  let activeStyle = {
    fontWeight: "900",
    color: "red"
  }


  return (
    <nav>
      <NavLink
        to="/kitkat"
        onClick={handleClick}
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
        Kit Kat
      </NavLink>
      <NavLink
        to="/snickers"
        onClick={handleClick}
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
        Snickers
      </NavLink>
      <NavLink
        to="/layschips"
        onClick={handleClick}
        style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
        Lays Chips
      </NavLink>
    </nav>
  );
}

export default ListSnacks;
