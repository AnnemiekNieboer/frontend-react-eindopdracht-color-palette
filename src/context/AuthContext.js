import React, {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(false);

//Context for handeling the authorization in the whole application (register and login)
function AuthContextProvider({children}) {
    const endpoint = "https://frontend-educational-backend.herokuapp.com/";

    const [auth, toggleAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    })

    const history = useHistory();

    // Function to check if there is a token in the local storage and to check if it is expired or not
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token != null) {
            const decodedToken = jwt_decode(token);

            if (decodedToken.exp > new Date() / 1000) {
                //Function to fetch user login data when token is not expired
                async function getUserData() {
                    try {
                        const respons = await axios.get(`${endpoint}api/user`, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`
                            }
                        });

                        toggleAuth({
                            isAuth: true,
                            user: {
                                email: respons.data.email,
                                username: respons.data.username,
                                id: respons.data.id,
                            },
                            status: "done"
                        })
                    } catch (e) {
                        toggleAuth({
                            ...auth,
                            status: "error"
                        });
                        console.error(e);
                        localStorage.clear();
                    }
                }

                getUserData();
            } else {
                toggleAuth({
                    ...auth,
                    status: "done",
                });
            }
        } else {
            toggleAuth({
                ...auth,
                status: "done",
            });
        }
    }, []);

    // Function for login in to My Color Palette
    function login(token) {
        const decodedToken = jwt_decode(token);
        localStorage.setItem("token", token);

        toggleAuth({
            ...auth,
            isAuth: true,
            user: {
                id: decodedToken.sub,
            },
            status: "done",
        });

        history.push("/");
    }

    // Function for logging out of My Color Palette
    function logout() {
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
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === 'done' && children}
            {auth.status === 'pending' && <p>Loading the app...</p>}
            {auth.status === 'error' && <p>Something went wrong, please refresh the page</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;