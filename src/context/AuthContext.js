import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(false);

function AuthContextProvider({children}) {
    const endpoint = "https://frontend-educational-backend.herokuapp.com/";

    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    })

    const history = useHistory();

    useEffect(() => {

    }, []);

    function goToLoginPage() {
        history.push("/login")
    }

    function login(token) {
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);

        localStorage.setItem("token", token);

        toggleAuth({
            ...auth,
            isAuth: true,
            user: {
                id: decodedToken.sub,
            },
            status: "done",
        });

        console.log("User is logged in");
        history.push("/");

    }

    function logout() {
        console.log("User is logged out");
        toggleAuth({
            isAuth: false,
            user: null,
            status: "done",
        })
        history.push("/");
    }

    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        endpoint: endpoint,
        login: login,
        logout: logout,
        goToLoginPage: goToLoginPage,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;