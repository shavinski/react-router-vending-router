import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Snack from "./Snack";
import ListSnacks from "./ListSnacks";

function VendingMachine() {

    return (
        <div>
            <BrowserRouter>
                <ListSnacks />
                <Routes>
                    <Route path="/:name" element={<Snack />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;