import React, {useContext} from "react";
import "./MyColorPaletteButton.css"
import myColorPaletteIcon from "../../assets/icons/color-palette.png"
import {PaletteContext} from "../../context/PaletteContext";

//Component for the My Color Palette button, fixed on the side of the homepage
function MyColorPaletteButton() {
    const {setColorPaletteOpen} = useContext(PaletteContext);

    return (
        <button
            onClick={() => setColorPaletteOpen(true)}
            className="button__reusable my-color-palette__open-button"
            type="button">
            <img alt="my color palette icon" className="my-color-palette-button__icon" src={myColorPaletteIcon}/>
            my palette
        </button>
    );
}

export default MyColorPaletteButton;