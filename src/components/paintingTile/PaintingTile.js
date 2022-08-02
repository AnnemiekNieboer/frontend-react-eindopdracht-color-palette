import React, {useEffect, useState} from "react";
import axios from "axios";
import "./PaintingTile.css"
import {Link} from "react-router-dom";

function PaintingTile({objectNumber, key}) {
    const apiKey = "0fxKSuxK";
    const [titleOfPainting, fetchTitleOfPainting] = useState("");
    const [artistOfPainting, fetchArtistOfPainting] = useState("");
    const [dateOfPainting, fetchDateOfPainting] = useState("");
    const [imageUrlOfPainting, fetchImageUrlOfPainting] = useState("");
    const [colorsOfPainting, fetchColorsOfPainting] = useState([]);

    useEffect(() => {
        async function getPaintingDetail() {

            try {
                const result = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${objectNumber}?key=${apiKey}`);
                console.log(result);
                fetchTitleOfPainting(result.data.artObject.title);
                fetchArtistOfPainting(result.data.artObject.principalMaker);
                fetchDateOfPainting(result.data.artObject.dating.presentingDate);
                fetchImageUrlOfPainting(result.data.artObject.webImage.url);
                fetchColorsOfPainting(result.data.artObject.colors);
                console.log(colorsOfPainting);
            } catch (e) {
                console.error(e)
            }
        }

        getPaintingDetail();
    }, [objectNumber]);

    return (
        <article className="painting-tile" key={key}>
            <div className="painting-tile__image-container">
                <img className="painting-tile-image-container__image" src={imageUrlOfPainting} alt={titleOfPainting}/>
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
                            <li
                                className="color-list__list-item"
                                key={hex}
                                style={{
                                    backgroundColor: `${hex}`,
                                }}
                            ></li>
                        ))
                        }
                    </ul>
                    <Link className="painting-tile__link" onClick="/">Add all colors</Link>
                </div>

            </div>
        </article>
    );
}

export default PaintingTile;