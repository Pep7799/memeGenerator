import React from "react";

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="nav-left">
            <img src="./face.png" className="nav-img"/>
            <span className="nav-text1">Meme Generator</span>
            </div>

            <div className="nav-right">
                <h5 className="nav-text2">React Course - Project 3</h5>
            </div>
        </nav>
    )
}