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

function SnackList() {
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {

  // }, [])
  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      {!isClicked && (
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
      )}
    </div>
  );
}

export default SnackList;
