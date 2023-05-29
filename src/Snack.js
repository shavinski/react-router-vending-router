import React from "react";
import { useParams } from "react-router-dom"

function Snack() {
    const params = useParams();

    return (
        <div>
            <h1>You selected {params.name}</h1>
        </div>
    )
}

export default Snack;