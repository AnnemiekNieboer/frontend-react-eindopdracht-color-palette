import React from 'react';
import "./Authorization.css";
import {Link} from "react-router-dom";
import Button from "../button/Button";

function Authorization({onSubmitValue, header, children, underlineTextPart1, underlineLink, underlineLinkText, underlineTextPart2, buttonText, valueUsername, onChangeUsername, valuePassword, onChangePassword, error}) {
    return (
        <div className="authorization__container">
            <h2>My Color Palette</h2>
            <h3 className="authorization__underline-header">{header}</h3>
            <form onSubmit={onSubmitValue}>
                {children}
                <label className="authorization__label" htmlFor="username">
                    Username
                    <input
                        className="input-field__reusable authorization__input-field"
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        value={valueUsername}
                        onChange={onChangeUsername}
                    />
                </label>
                <label className="authorization__label" htmlFor="password">
                    Password
                    <input
                        className="input-field__reusable authorization__input-field"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={valuePassword}
                        onChange={onChangePassword}
                    />
                </label>
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