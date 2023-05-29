import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function ListSnacks() {
    const location = useLocation();
    console.warn(location)
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');


  return (
    <nav>
      <NavLink to="/kitkat">Kit Kat</NavLink>
      <NavLink to="/snickers">Snickers</NavLink>
      <NavLink to="/layschips">Lays Chips</NavLink>
    </nav>
  );
}

export default ListSnacks;
