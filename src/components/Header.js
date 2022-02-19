import React from "react";
import ReactDOM from "react-dom";


export default function Header() {
    return (
        <div className="header">
            <nav className="navtrollface">
                <div className="trollpart">
                    <img  src="./Troll Face.png"></img>
                    <h3>Meme Generator</h3>
                </div>
                <div className="navtitle">
                    <p>
                        react Project - meme Project 
                    </p>
                </div>
            </nav>
        </div>
    )
}