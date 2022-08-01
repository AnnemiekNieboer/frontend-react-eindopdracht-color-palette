import React from 'react';
import './Register.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";

function Register() {
    return (
        <div className="outer-container__reusable authorization-container">
            <header className="inner-container__reusable">
                <Navigation
                />
            </header>
            <main className="inner-container__reusable">
                <Authorization
                    header= "Register"
                    underlineTextPart1="Do you already have a My Color Palette account? "
                    underlineLink="/login"
                    underlineLinkText="Login here"
                    buttonText="Register"
                >
                    <label className="authorization__label" htmlFor="email">
                        E-mail
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </label>
                </Authorization>
            </main>
        </div>
    );
}

export default Register;