import React from "react";
import "./MyColorPaletteButton.css"
import myColorPaletteIcon from "../../assets/icons/color-palette.png"

function MyColorPaletteButton() {
    return (
        <button className="button__reuseable my-color-palette__open-button">
            <img className="my-color-palette-button__icon" src={myColorPaletteIcon}/>
            my palette
        </button>
    );
}

export default MyColorPaletteButton;