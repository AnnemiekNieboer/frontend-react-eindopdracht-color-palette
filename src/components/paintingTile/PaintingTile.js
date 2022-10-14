import React, {useEffect, useState, useContext} from "react";
import axios from "axios";
import "./PaintingTile.css"
import {Link} from "react-router-dom";
import ColorsPaintingTile from "./ColorsPaintingTile";
import {PaletteContext} from "../../context/PaletteContext";
import downloadImageIcon from "../../assets/icons/download-icon.png";
import downloadImageOfArtObject from "../../helpers/downloadImageOfArtObject";

//Component function for creating the result tiles. It uses the object number of the general search result, to get more detailed information about the painting such as the colors
function PaintingTile({objectNumber}) {
    const [titleOfPainting, fetchTitleOfPainting] = useState("");
    const [artistOfPainting, fetchArtistOfPainting] = useState("");
    const [dateOfPainting, fetchDateOfPainting] = useState("");
    const [imageUrlOfPainting, fetchImageUrlOfPainting] = useState("");
    const [colorsOfPainting, fetchColorsOfPainting] = useState([]);

    const {addHexColorFunction} = useContext(PaletteContext);

    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function getPaintingDetail() {
            toggleLoading(true);
            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${process.env.REACT_APP_API_KEY}`);
                fetchTitleOfPainting(result.data.artObject.title);
                fetchArtistOfPainting(result.data.artObject.principalMaker);
                fetchDateOfPainting(result.data.artObject.dating.presentingDate);
                fetchImageUrlOfPainting(result.data.artObject.webImage.url);
                fetchColorsOfPainting(result.data.artObject.colors);
            } catch (e) {
                console.error(e)
            }
            toggleLoading(false)
        }

        getPaintingDetail();
    }, [objectNumber]);

    if (colorsOfPainting.length > 0)

        return (
            <article className="painting-tile">
                {loading && <span className="painting-tile__loading">Loading...</span>}
                <div className="painting-tile__image-container">
                    <img className="painting-tile-image-container__image" src={imageUrlOfPainting}
                         alt={titleOfPainting}/>
                    <button className="painting-tile__download-image-button"
                            title="Download image of art object"
                            type="button"
                            onClick={() => downloadImageOfArtObject(imageUrlOfPainting, titleOfPainting)}>
                        <img className="painting-tile__download-image" src={downloadImageIcon}
                             alt="download art object"/>
                    </button>
                </div>
                <div className="painting-tile__attribute-section">
                    <div className="attribute-section__text">
                        <h3 className="painting-tile__titles">{titleOfPainting}</h3>
                        <p className="painting-tile__under-title">{artistOfPainting} - {dateOfPainting}</p>
                    </div>
                    <div>
                        <h3 className="painting-tile__titles">Add colors</h3>
                        <ul className="painting-tile-attribute-section__color-list">
                            {colorsOfPainting.map(({hex}) => (
                                <ColorsPaintingTile
                                    hex={hex}
                                    key={hex}
                                />
                            ))
                            }
                        </ul>
                        <Link className="painting-tile__link"
                              to="#"
                              onClick={() => {
                                  colorsOfPainting.map(({hex}) => (
                                      addHexColorFunction(hex)
                                  ))
                              }}
                        >
                            Add all colors
                        </Link>
                    </div>

                </div>
            </article>
        );
}

export default PaintingTile;