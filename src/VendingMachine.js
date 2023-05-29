import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";
import Nav from "./Nav";
import SnackList from "./SnackList";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/:name" element={<Snack />} />
        </Routes>
        <SnackList />
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
