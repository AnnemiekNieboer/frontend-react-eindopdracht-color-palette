import React from 'react';
import './InspirationPage.css';
import Header from "../../components/header/Header";

function InspirationPage() {
    return (
        <>
         <Header
             className="inner-container__reusable header-background-image__inspiration"
             header="Artist of light: Johannes Vermeer"
             text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />
        </>
    );
}

export default InspirationPage;