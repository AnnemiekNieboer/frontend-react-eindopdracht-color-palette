import React, {useContext, useState} from 'react';
import axios from 'axios';
import './Login.css';
import Navigation from "../../components/navigation/Navigation";
import Authorization from "../../components/authorization/Authorization";
import {AuthContext} from "../../context/AuthContext";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login, endpoint} = useContext(AuthContext);

    function handleLogin(e) {
        e.preventDefault(e)
        console.log(username);
        console.log(password);
        makeLoginRequest()
    }

    async function makeLoginRequest() {
        try {
            const response = await axios.post(`${endpoint}api/auth/signin`, {
                "username": username,
                "password": password,
            })
            console.log(response);
            console.log(response.data.accessToken);
            login(response.data.accessToken);

        } catch (e) {
            console.error(e)
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
                    onSubmitValue={handleLogin}
                    header="Login"
                    underlineTextPart1="New to My Color Palette?"
                    underlineLink="/register"
                    underlineLinkText="Register here"
                    underlineTextPart2="your new account"
                    buttonText="login"
                    valueUsername={username}
                    onChangeUsername={(e) => setUsername(e.target.value)}
                    valuePassword={password}
                    onChangePassword={(e) => setPassword(e.target.value)}
                />
            </main>
        </div>
    );
}

export default Login;