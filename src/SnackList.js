import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> SnackList -> {CHILDREN}
 */

function SnackList({ handleClick }) {
  return (
    <div>
      <Link onClick={handleClick} to="/kitkat">
        Kit Kat
      </Link>
      <Link onClick={handleClick} to="/snickers">
        Snickers
      </Link>
      <Link onClick={handleClick} to="/layschips">
        Lays Chips
      </Link>
    </div>
  );
}

export default SnackList;
