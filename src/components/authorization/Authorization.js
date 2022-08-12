import React from 'react';
import "./Authorization.css";
import {Link} from "react-router-dom";
import Button from "../button/Button";

//Component for login and register
function Authorization({onSubmitValue, header, children, underlineTextPart1, underlineLink, underlineLinkText, underlineTextPart2, buttonText, error}) {
    return (
        <div className="authorization__container">
            <h2>My Color Palette</h2>
            <h3 className="authorization__underline-header">{header}</h3>
            <form onSubmit={onSubmitValue}>
                {children}
                <p className="authorization__underline-text">{underlineTextPart1} <Link className="underline-link" to={underlineLink}>{underlineLinkText}</Link> {underlineTextPart2}</p>
                <Button
                    text={buttonText}
                    type="submit"
                />
                <div className="authorization__error">{error}</div>
            </form>
        </div>
    );
}

export default Authorization;