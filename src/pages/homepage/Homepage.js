import React from "react";
import "./Homepage.css";
import Header from "../../components/header/Header";

function Homepage() {
    return (
        <>
            <Header
                className="inner-container__reusable header-background-image__homepage"
                header="Learn from the masters, and become one"
                text="Be inspired and challenged by the color palette of your favorite Rijksmuseum artist and maybe you will develop into the new Rembrandt"
            >
                <button>search now -></button>
            </Header>
        </>
    );
}

export default Homepage;