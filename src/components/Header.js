import React from "react";
import manchot from "../assets/manchot.png"

export default function Header() {
    return (
        <header> 
            <i className="fa-solid fa-igloo"></i>
            <h1>Floe</h1>
            <img className="floe-icon" src={manchot}></img>
        </header>
    )
}