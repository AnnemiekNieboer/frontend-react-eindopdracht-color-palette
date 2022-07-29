import React from 'react';
import './Login.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";

function Login() {
    return (
        <div className="outer-container__reusable authorization-container">
            <header className="inner-container__reusable">
                <Navigation
                />
            </header>
            <main className="inner-container__reusable">
                <Authorization
                header= "Login"
                underlineTextPart1="New to My Color Palette?"
                underlineLink="/register"
                underlineLinkText="Register here"
                underlineTextPart2="your new account"
                buttonText="login"
                />
            </main>
        </div>
    );
}

export default Login;