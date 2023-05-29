import React from "react";
import { NavLink } from "react-router-dom";

function ListSnacks() {

    return (
        <nav>
            <NavLink to="/kitkat">
                Kit Kat
            </NavLink>
            <NavLink to="/snickers">
                Snickers
            </NavLink>
            <NavLink to="/layschips">
                Lays Chips
            </NavLink>
        </nav>
    )
}

export default ListSnacks;