import React, {useContext} from "react";
import "./MyColorPaletteButton.css"
import myColorPaletteIcon from "../../assets/icons/color-palette.png"
import {PaletteContext} from "../../context/PaletteContext";

//Component for the My Color Palette button, fixed on the side of the homepage
function MyColorPaletteButton() {
    const{ colorPaletteOpen, setColorPaletteOpen } = useContext(PaletteContext);
    console.log(colorPaletteOpen);

    return (
            <button onClick={() => setColorPaletteOpen(true)} className="button__reusable my-color-palette__open-button">
                <img className="my-color-palette-button__icon" src={myColorPaletteIcon}/>
                my palette
            </button>
    );
}

export default MyColorPaletteButton;