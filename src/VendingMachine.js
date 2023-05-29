import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";
import Nav from "./Nav";

function VendingMachine() {
  const [currentSnack, setCurrentSnack] = useState(null);

  function updateCurrentSnack(string) {
    setCurrentSnack(string);
  }

  return (
    <div>
      <BrowserRouter>
        <Nav currentSnack={currentSnack} />
        <Routes>
          <Route path="/:name" element={<Snack updateSnack={updateCurrentSnack} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
