import React, {useContext, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import './Register.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";
import {AuthContext} from "../../context/AuthContext";

//Page for registering a user
function Register() {
    const {endpoint} = useContext((AuthContext));
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"});

    function submitRegister(data) {
        makeRegisterRequest(data)
        history.push("/login");
    }

    //Function for registering an account on the Novi educational backend
    async function makeRegisterRequest(data) {
        toggleError(false);
        toggleLoading(true);
        try {
            await axios.post(`${endpoint}api/auth/signup`, {
                "username": data.username,
                "email": data.email,
                "password": data.password,
                "role": ["user"],
            });
        } catch (e) {
            console.error(e)
            toggleError(true)
        }
        toggleLoading(false);
    }

    return (
        <div className="outer-container__reusable authorization-container">
            <header className="inner-container__reusable">
                <Navigation
                />
            </header>
            <main className="inner-container__reusable">
                <Authorization
                    onSubmitValue={handleSubmit(submitRegister)}
                    header="Register"
                    underlineTextPart1="Do you already have a My Color Palette account? "
                    underlineLink="/login"
                    underlineLinkText="Login here"
                    buttonText="Register"
                    error={error && <span>This account already exist, please register with different credentials</span>}
                    loading={loading && <span>Registering your account, please wait...</span>}
                >

                    <label className="authorization__label" htmlFor="email">
                        E-mail
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email cannot be empty",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Email address is not valid",
                                }
                            })}
                        />
                        {errors.email && <p className="authorization__error">{errors.email.message}</p>}
                    </label>
                    <label className="authorization__label" htmlFor="username">
                        Username
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            {...register("username", {
                                required: "Username cannot be empty",
                                minLength: {
                                    value: 6,
                                    message: "Use at least 6 characters for the username",
                                }
                            })}
                        />
                        {errors.username && <p className="authorization__error">{errors.username.message}</p>}
                    </label>
                    <label className="authorization__label" htmlFor="password">
                        Password
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password cannot be empty",
                                minLength: {
                                    value: 6,
                                    message: "Use at least 6 characters for the password",
                                }
                            })}
                        />
                        {errors.password && <p className="authorization__error">{errors.password.message}</p>}
                    </label>
                </Authorization>
            </main>
        </div>
    );
}

export default Register;