import React, {useContext, useState} from 'react';
import axios from "axios";
import './Register.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { endpoint } = useContext((AuthContext));
    const [error, toggleError] = useState(false)

    const history = useHistory();

    function submitRegister(e) {
        e.preventDefault();
        makeRegisterRequest();
        history.push("/login");
        console.log(email);
        console.log(userName);
        console.log(password);
    }

    //Function for registering an account on the Novi educational backend
    async function makeRegisterRequest() {
        toggleError(false);
        try {
            const response = await axios.post(`${endpoint}api/auth/signup`, {
                "username": userName,
                "email": email,
                "password": password,
                "role": ["user"],
            });
            console.log(response)

        } catch (e) {
            console.error(e)
            toggleError(true)
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
                    onSubmitValue={submitRegister}
                    header= "Register"
                    underlineTextPart1="Do you already have a My Color Palette account? "
                    underlineLink="/login"
                    underlineLinkText="Login here"
                    buttonText="Register"
                    valueUsername={userName}
                    onChangeUsername={(e) => setUserName(e.target.value)}
                    valuePassword={password}
                    onChangePassword={(e) => setPassword(e.target.value)}
                    error={error && <span>This account already exist, please register with different credentials</span>}
                >
                    <label className="authorization__label" htmlFor="email">
                        E-mail
                        <input
                            className="input-field__reusable authorization__input-field"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </Authorization>
            </main>
        </div>
    );
}

export default Register;