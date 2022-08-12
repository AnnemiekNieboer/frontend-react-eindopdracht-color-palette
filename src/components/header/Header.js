import React from "react";
import "./Header.css"
import Navigation from "../navigation/Navigation";

function Header({header, text, children}) {
    return (
        <div className="outer-container__reusable header header-background-image__homepage">
            <div className= "inner-container__reusable">
                <Navigation/>
                <section className="header__text-section">
                    <h1 className="header-text-section__title">{header}</h1>
                    <p className="header-text-section__intro">{text}</p>
                    {children}
                </section>

            </div>
        </div>
    );
}

export default Header;