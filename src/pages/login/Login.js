import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

import './Login.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";
import {AuthContext} from "../../context/AuthContext";

function Login() {
    const {login, endpoint} = useContext(AuthContext);
    const [error, toggleError] = useState(false);

    const { register, handleSubmit } = useForm();

    function handleLogin(data) {
        console.log(data);
        makeLoginRequest(data);
    }

    async function makeLoginRequest(data) {
        toggleError(false);
        try {
            const response = await axios.post(`${endpoint}api/auth/signin`, {
                "username": data.username,
                "password": data.password,
            })
            console.log(response);
            console.log(response.data.accessToken);
            login(response.data.accessToken);

        } catch (e) {
            console.error(e)
            toggleError(true);
        }
    }

    return (
        <div className="outer-container__reusable authorization-container">
            <header className="inner-container__reusable">
                <Navigation
                />
            </header>
            <main className="inner-container__reusable">
                <Authorization
                    onSubmitValue={handleSubmit(handleLogin)}
                    header="Login"
                    underlineTextPart1="New to My Color Palette?"
                    underlineLink="/register"
                    underlineLinkText="Register here"
                    underlineTextPart2="your new account"
                    buttonText="login"
                    error={error && <span>Username/password invalid, try again or register a new account</span>}
                >
                    <label className="authorization__label" htmlFor="username">
                        Username
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            minLength={6}
                            {...register("username")}
                        />
                    </label>
                    <label className="authorization__label" htmlFor="password">
                        Password
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            minLength={6}
                            {...register("password")}
                        />
                    </label>
                </Authorization>
            </main>
        </div>
    );
}

export default Login;