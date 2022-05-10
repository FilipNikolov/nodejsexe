import React from "react";
import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <ul id="nav">
            <li><Link to="/">Back to App</Link></li>
            <li><Link to="/cake">Cake</Link></li>
        </ul>
    )
}