import React, {useRef, useState, useContext} from "react";
import axios from "axios";
import "./Homepage.css";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import PaintingTile from "../../components/paintingTile/PaintingTile";
import MyColorPaletteButton from "../../components/myColorPaletteButton/MyColorPaletteButton";
import Checkbox from "../../components/checkbox/Checkbox";
import goUpIcon from "../../assets/icons/go-up.png"
import {PaletteContext} from "../../context/PaletteContext";

function Homepage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [colorQuery, setColorQuery] = useState("");
    const [catalogueQuery, setCatalogueQuery] = useState("");

    const refSearch = useRef(null);
    const refResults = useRef(null)

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [noResults, toggleNoResults] = useState(false);
    const [noSearch, toggleNoSearch] = useState(true);
    const [paintingsData, fetchPaintingsData] = useState([])

    const { colorPalette } = useContext(PaletteContext)
    console.log(colorPalette);

    //Function that is fired when you submit the form
    function submitForm(e) {
        e.preventDefault();
        getPaintingData();
        refResults.current?.scrollIntoView({behavior: "smooth"})
        console.log(searchQuery);
        console.log(colorQuery.hexColor);
        console.log(catalogueQuery);

        async function getPaintingData() {
            toggleError(false);
            toggleLoading(true);
            toggleNoResults(false);
            toggleNoSearch(false);
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection`, {
                    params: {
                        key: process.env.REACT_APP_API_KEY,
                        imgonly: "True",
                        q: searchQuery ? searchQuery : null,
                        "f.normalized32Colors.hex": colorQuery.hexColor ? colorQuery.hexColor : null,
                        cctitle: catalogueQuery ? catalogueQuery : null,
                    }
                });
                console.log(result.data.artObjects);
                fetchPaintingsData(result.data.artObjects);
                if (result.data.artObjects.length === 0) toggleNoResults(true);
            } catch (e) {
                console.error(e)
                toggleError(true)
            }
            toggleLoading(false)
        }
    }

    return (
        <div className="outer-container__reusable">
            <Header
                className="inner-container__reusable"
                header="Learn from the masters, and become one"
                text="Be inspired and challenged by the color palette of your favorite Rijksmuseum artist and maybe you will develop into the new Rembrandt"
            >
                <Button
                    onClick= {() => refSearch.current?.scrollIntoView({behavior: "smooth"})}
                    text="search now"
                    type="button"
                />
            </Header>
            <main className="inner-container__reusable">
                <MyColorPaletteButton/>
                <section className="search-query__section" ref={refSearch}>
                    <h2>Search for Color Inspiration</h2>
                    <form onSubmit={submitForm}>
                        <fieldset aria-label="Search for color inspiration by artist/painting">
                            <label htmlFor="search-query-artist-painting">
                                Search by artist/painting
                            </label>
                            <input className="search-query__input-field input-field__reusable" type="text"
                                   id="search-query-artist-painting" name="search-query-artist-painting"
                                   placeholder="artist/painting"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </fieldset>
                        <h4>Search options (optional)</h4>
                        <fieldset aria-label="Optional search options">
                            <h5>Search by color</h5>

                            <div className="checkboxes-container">
                                <Checkbox
                                    className="checkbox color1"
                                    labelName="#000000"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#000000"}
                                    colorFunction={setColorQuery}
                                    hexColor="#000000"
                                />
                                <Checkbox
                                    className="checkbox color2"
                                    labelName="#B5BFCC"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#B5BFCC"}
                                    colorFunction={setColorQuery}
                                    hexColor="#B5BFCC"
                                />
                                <Checkbox
                                    className="checkbox color3"
                                    labelName="#E0CC91"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#E0CC91"}
                                    colorFunction={setColorQuery}
                                    hexColor="#E0CC91"
                                />
                                <Checkbox
                                    className="checkbox color4"
                                    labelName="#F49B7A"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#F49B7A"}
                                    colorFunction={setColorQuery}
                                    hexColor="#F49B7A"
                                />
                                <Checkbox
                                    className="checkbox color5"
                                    labelName="#2F4F4F"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#2F4F4F"}
                                    colorFunction={setColorQuery}
                                    hexColor="#2F4F4F"
                                />
                                <Checkbox
                                    className="checkbox color6"
                                    labelName="#DDA5AA"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#DDA5AA"}
                                    colorFunction={setColorQuery}
                                    hexColor="#DDA5AA"
                                />
                                <Checkbox
                                    className="checkbox color7"
                                    labelName="#E09714"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#E09714"}
                                    colorFunction={setColorQuery}
                                    hexColor="#E09714"
                                />
                                <Checkbox
                                    className="checkbox color8"
                                    labelName="#B35A1F"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#B35A1F"}
                                    colorFunction={setColorQuery}
                                    hexColor="#B35A1F"
                                />
                                <Checkbox
                                    className="checkbox color9"
                                    labelName="#367614"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#367614"}
                                    colorFunction={setColorQuery}
                                    hexColor="#367614"
                                />
                                <Checkbox
                                    className="checkbox color10"
                                    labelName="#4019B1"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#4019B1"}
                                    colorFunction={setColorQuery}
                                    hexColor="#4019B1"
                                />
                                <Checkbox
                                    className="checkbox color11"
                                    labelName="#DE4153"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#DE4153"}
                                    colorFunction={setColorQuery}
                                    hexColor="#DE4153"
                                />
                                <Checkbox
                                    className="checkbox color12"
                                    labelName="#62AD77"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#62AD77"}
                                    colorFunction={setColorQuery}
                                    hexColor="#62AD77"
                                />
                                <Checkbox
                                    className="checkbox color13"
                                    labelName="#8268DC"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#8268DC"}
                                    colorFunction={setColorQuery}
                                    hexColor="#8268DC"
                                />
                                <Checkbox
                                    className="checkbox color14"
                                    labelName="#850085"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#850085"}
                                    colorFunction={setColorQuery}
                                    hexColor="#850085"
                                />
                                <Checkbox
                                    className="checkbox color15"
                                    labelName="#981313"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#981313"}
                                    colorFunction={setColorQuery}
                                    hexColor="#981313"
                                />
                                <Checkbox
                                    className="checkbox color16"
                                    labelName=" #FFEB00"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === " #FFEB00"}
                                    colorFunction={setColorQuery}
                                    hexColor=" #FFEB00"
                                />
                                <Checkbox
                                    className="checkbox color17"
                                    labelName="#4279DB"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === "#4279DB"}
                                    colorFunction={setColorQuery}
                                    hexColor="#4279DB"
                                />
                                <Checkbox
                                    className="checkbox color18"
                                    labelName="all-colors"
                                    value={colorQuery}
                                    checked={colorQuery.hexColor === ""}
                                    colorFunction={setColorQuery}
                                    hexColor=""
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="search-by-catalogue-title">
                                Search by catalogue title
                                <select
                                    className="input-field__reusable input-field__select-catalogue"
                                    id="search-by-catalogue-title"
                                    value={catalogueQuery}
                                    onChange={(e) => setCatalogueQuery(e.target.value)}
                                >
                                    <option value="">all catalogues</option>
                                    <option value="(under construction) Dutch Paintings I">Dutch paintings</option>
                                    <option value="Early Netherlandish Paintings">Early Netherlandish Paintings</option>
                                    <option value="Flemish Paintings in the Rijksmuseum">Flemish Paintings in the Rijksmuseum</option>
                                    <option value="Dutch Paintings of the Seventeenth Century in the Rijksmuseum">Dutch Paintings of the Seventeenth Century in the Rijksmuseum</option>
                                </select>
                            </label>
                        </fieldset>

                        <Button
                            type="submit"
                            text="search"
                        />
                    </form>
                </section>
                <section className="search-result" ref={refResults}>
                    <h2>Results</h2>
                    {noSearch && <span>Use the search bar above, to find a nice color palette</span>}
                    {loading && <span>Loading...</span>}
                    {error && <span>Sorry, something went wrong with getting your results. Please try again later</span>}
                    {noResults && <span>No results found for keyword: "{searchQuery ? searchQuery : "not filled in"}", color: "{colorQuery.hexColor ? colorQuery.hexColor : "all colors"}" and catalogue: "{catalogueQuery ? catalogueQuery : "all catalogues"}". Try to be less specific in your search or maybe try to search just for "Gallery of honour" and see some cool results</span>}
                    {paintingsData.map((paintingData) => {
                        return (
                            <PaintingTile
                            objectNumber={paintingData.objectNumber}
                            key={paintingData.id}
                            />
                        )
                    })}
                </section>
                <img alt="go-to-top-of-search-section" src={goUpIcon} onClick={() => refSearch.current?.scrollIntoView({behavior: "smooth"})} className="search-result__go-up-icon"/>
            </main>
        </div>
    );
}

export default Homepage;