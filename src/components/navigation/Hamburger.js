import React from "react";
import "./Hamburger.css"

//Hamburger menu component
function Hamburger({isOpen}) {
    return (
        <div className="hamburger">
            <div className={isOpen ? "burger burger-top" : "burger"}></div>
            <div className={isOpen ? "burger burger-center" : "burger"}></div>
            <div className={isOpen ? "burger burger-bottom" : "burger"}></div>
        </div>
    );
}

export default Hamburger;