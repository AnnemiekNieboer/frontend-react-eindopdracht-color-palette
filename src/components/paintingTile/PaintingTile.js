import React from "react";
import "./PaintingTile.css"
import {Link} from "react-router-dom";
import placeholderimage from '../../assets/img/placeholder-image-1200px.jpg'

function PaintingTile(props) {
    return (
        <article className="painting-tile">
            <div className="painting-tile__image-container">
                <img className="painting-tile-image-container__image" src={placeholderimage} alt="placeholder-text"/>
            </div>
            <div className="painting-tile__attribute-section">
                <div className="attribute-section__text">
                    <h3 className="painting-tile__titles">The Placeholder</h3>
                    <p className="painting-tile__under-title">Johannes Placeholder - 1820</p>
                </div>
                <div>
                    <h3 className="painting-tile__titles">Add colors</h3>
                    <ul className="painting-tile-attribute-section__color-list">
                        <li className="color-list__list-item"></li>
                        <li className="color-list__list-item"></li>
                        <li className="color-list__list-item"></li>
                        <li className="color-list__list-item"></li>
                        <li className="color-list__list-item"></li>
                        <li className="color-list__list-item"></li>
                    </ul>
                    <Link className="painting-tile__link" onClick="/">Add all colors</Link>
                </div>

            </div>
        </article>
    );
}

export default PaintingTile;