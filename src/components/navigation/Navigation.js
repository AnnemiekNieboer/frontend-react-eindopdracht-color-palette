import React, {useContext, useState} from "react";
import './Navigation.css';
import Hamburger from "./Hamburger";
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function Navigation() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const { isAuth, logout } = useContext(AuthContext);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="navigation__container">
            <ul className={hamburgerOpen ? "navigation-opened navigation__standard" : "navigation-closed navigation__standard"}>
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
                        <NavLink
                            className="navigation__nav-link"
                            onClick={logout}
                            exact to="/login"
                            activeClassName="navigation-nav-link__active">
                            logout
                        </NavLink>
                        :
                        <NavLink
                            className="navigation__nav-link"
                            exact to="/login"
                            activeClassName="navigation-nav-link__active">
                            login
                        </NavLink>}
                </li>
                <li className="navigation__list-items">
                    <NavLink className="navigation__nav-link" exact to="/register"
                             activeClassName="navigation-nav-link__active">register</NavLink>
                </li>
            </ul>
            <div className="hamburger-outer-container" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
        </div>
    );
}

export default Navigation;