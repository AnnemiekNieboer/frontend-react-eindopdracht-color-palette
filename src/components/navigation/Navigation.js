import React, {useContext, useState} from "react";
import './Navigation.css';
import {useHistory} from "react-router-dom";
import Hamburger from "./Hamburger";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import LoginLogoutButton from "../loginLogoutButton/LoginLogoutButton";

//Navigation component
function Navigation() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="navigation__container">
            <ul className={hamburgerOpen ? "navigation__standard" : "navigation-closed navigation__standard"}>
                <li className="navigation__list-items">
                    <NavLink className="navigation__nav-link" exact to="/"
                             activeClassName="navigation-nav-link__active">home</NavLink>
                </li>
                <li className="navigation__list-items">
                    <NavLink className="navigation__nav-link" exact to="/inspiration"
                             activeClassName="navigation-nav-link__active">inspiration</NavLink>
                </li>
                <li className="navigation__list-items">
                    {isAuth ?
                        <LoginLogoutButton
                            text="logout"
                            onClick={logout}
                        />
                        :
                        <LoginLogoutButton
                            text="login"
                            onClick={() => history.push("/login")}
                        />
                    }
                </li>

            </ul>
            <div className="hamburger-outer-container" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
        </div>
    );
}

export default Navigation;