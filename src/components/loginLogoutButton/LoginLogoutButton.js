import React from "react";
import "./LoginLogoutButton.css";
import accountIcon from "../../assets/icons/artist.png";

//Component for login/logout button in menu
function LoginLogoutButton({onClick, text}) {
    return (
        <button
            className="button__reusable login-logout-button"
            type="button"
            onClick={onClick}
        >
            <img className="login-logout-button__icon" src={accountIcon} alt="login and logout button"/>
            {text}
        </button>
    );
}

export default LoginLogoutButton;