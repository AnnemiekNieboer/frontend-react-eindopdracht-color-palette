import React from "react";
import "./Header.css"
import Navigation from "../navigation/Navigation";

function Header({className, header, text, children}) {
    return (
        <div className="outer-container__reusable header">
            <div className={className}>
                <Navigation/>
                <section className="header__text-section inner-container__reusable">
                    <h1 className="header-text-section__title">{header}</h1>
                    <p className="header-text-section__intro">{text}</p>
                    {children}
                </section>

            </div>
        </div>
    );
}

export default Header;