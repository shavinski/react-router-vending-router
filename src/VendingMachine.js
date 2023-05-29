import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";
import Nav from "./Nav";
import SnackList from "./SnackList";

function VendingMachine() {
  const [navIsClicked, setNavIsClicked] = useState(false);
  const [listIsClicked, setListIsClicked] = useState(false);

  function handleNavClick() {
    setNavIsClicked(true);
  }

  function handleListClick() {
    setListIsClicked(true);
  }

  
  return (
    <div>
      <BrowserRouter>
        <Nav handleClick={handleNavClick}/>
        <Routes>
          <Route path="/:name" element={<Snack handleClick={handleListClick} />} />
        </Routes>
        {(!navIsClicked || !listIsClicked) &&
          <SnackList handleClick={handleListClick}/>
        }
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
