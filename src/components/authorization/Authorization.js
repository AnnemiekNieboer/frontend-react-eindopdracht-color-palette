import React from 'react';
import "./Authorization.css";
import {Link} from "react-router-dom";
import Button from "../button/Button";

function Authorization({header, children, underlineTextPart1, underlineLink, underlineLinkText, underlineTextPart2, buttonText}) {
    return (
        <div className="authorization__container">
            <h2>My Color Palette</h2>
            <h3 className="authorization__underline-header">{header}</h3>
            <form>
                {children}
                <label className="authorization__label" htmlFor="username">
                    Username
                    <input
                        className="input-field__reuseable authorization__input-field"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                    />
                </label>
                <label className="authorization__label" htmlFor="password">
                    Password
                    <input
                        className="input-field__reuseable authorization__input-field"
                        type="text"
                        id="password"
                        placeholder="Enter your password"
                    />
                </label>
                <p className="authorization__underline-text">{underlineTextPart1} <Link to={underlineLink}>{underlineLinkText}</Link> {underlineTextPart2}</p>
                <Button
                    text={buttonText}
                    type="submit"
                />
            </form>
        </div>
    );
}

export default Authorization;