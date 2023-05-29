import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Snack({ handleClick }) {
  const params = useParams();

  return (
    <div>
      <h1>You selected {params.name}</h1>
      <NavLink onClick={handleClick} to="/">Go Home</NavLink>
    </div>
  );
}

export default Snack;
