import React, {useState} from "react";
import "./Homepage.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import PaintingTile from "../../components/paintingTile/PaintingTile";

function Homepage() {

    const [checkedRadioButton1, toggleCheckedRadioButton1] = React.useState("");
    const [checkedRadioButton2, toggleCheckedRadioButton2] = React.useState("");


    //Als checked is true, dan false, als checked is false, dan checked is true

    return (
        <div className="outer-container__reusable">
            <Header
                className="header-background-image__homepage inner-container__reusable"
                header="Learn from the masters, and become one"
                text="Be inspired and challenged by the color palette of your favorite Rijksmuseum artist and maybe you will develop into the new Rembrandt"
            >
                <Button
                    onClick="#search-query__section"
                    text="search now"
                    type="button"
                />
            </Header>
            <main className="inner-container__reusable">
                <section className="search-query__section" id="search-query__section">
                    <h2>Search for Color Inspiration</h2>
                    <form>
                        <fieldset aria-label="Search for color inspiration by artist/painting">
                            <label htmlFor="search-query-artist-painting">
                                Search by artist/painting
                            </label>
                            <input className="search-query__input-field input-field__reusable" type="text"
                                   id="search-query-artist-painting" name="search-query-artist-painting"
                                   placeholder="artist/painting"/>
                        </fieldset>
                        <h4>Search options (optional)</h4>
                        <fieldset aria-label="Optional search options">
                            <h5>Search by color</h5>
                            <label htmlFor="color1">
                                <input onClick={toggleCheckedRadioButton1} value={checkedRadioButton1} type="radio"
                                       id="color1" name="select-color"/>
                            </label>
                            <label htmlFor="color2">
                                <input onClick={toggleCheckedRadioButton2} value={checkedRadioButton2} type="radio"
                                       id="color2" name="select-color"/>
                            </label>
                            <label htmlFor="color3">
                                <input type="radio" id="color3" name="select-color"/>
                            </label>
                            <label htmlFor="color4">
                                <input type="radio" id="color4" name="select-color"/>
                            </label>
                            <label htmlFor="color5">
                                <input type="radio" id="color5" name="select-color"/>
                            </label>
                            <label htmlFor="color6">
                                <input type="radio" id="color6" name="select-color"/>
                            </label>
                            <label htmlFor="color7">
                                <input type="radio" id="color7" name="select-color"/>
                            </label>
                            <label htmlFor="color8">
                                <input type="radio" id="color8" name="select-color"/>
                            </label>
                            <label htmlFor="color9">
                                <input type="radio" id="color9" name="select-color"/>
                            </label>
                            <label htmlFor="color10">
                                <input type="radio" id="color10" name="select-color"/>
                            </label>
                            <label htmlFor="color11">
                                <input type="radio" id="color11" name="select-color"/>
                            </label>
                            <label htmlFor="color12">
                                <input type="radio" id="color12" name="select-color"/>
                            </label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="search-by-catalogue-title">
                                Search by catalogue title
                                <select className="input-field__reusable" id="search-by-catalogue-title">
                                    <option value="test1">test</option>
                                    <option value="test2">test</option>
                                    <option value="test3">test</option>
                                </select>
                            </label>
                        </fieldset>

                        <Button
                            type="submit"
                            text="search"
                        />
                    </form>
                </section>
                <section className="search-result">
                    <h2>Results</h2>
                    <PaintingTile/>
                    <PaintingTile/>
                    <PaintingTile/>
                    <PaintingTile/>
                </section>
            </main>
        </div>
    );
}

export default Homepage;