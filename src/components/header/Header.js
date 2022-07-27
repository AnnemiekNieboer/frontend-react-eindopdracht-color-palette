import React from "react";
import "./Header.css"
import Navigation from "../navigation/Navigation";

function Header({className, header, text, children}) {
    return (
        <div className="outer-container__reusable header">
            <div className={className}>
                <Navigation/>
                <h1>{header}</h1>
                <p>{text}</p>
                {children}
            </div>
        </div>
    );
}

export default Header;