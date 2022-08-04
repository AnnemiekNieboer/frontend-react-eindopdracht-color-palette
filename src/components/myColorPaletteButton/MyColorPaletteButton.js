import React, {useContext} from "react";
import "./MyColorPaletteButton.css"
import {Link} from "react-router-dom";
import myColorPaletteIcon from "../../assets/icons/color-palette.png"
import {PaletteContext} from "../../context/PaletteContext";

function MyColorPaletteButton() {
    const{ colorPaletteOpen, setColorPaletteOpen } = useContext(PaletteContext);
    console.log(colorPaletteOpen);

    return (
        // <Link to="/my-color-palette">
            <button onClick={() => setColorPaletteOpen(true)} className="button__reusable my-color-palette__open-button">
                <img className="my-color-palette-button__icon" src={myColorPaletteIcon}/>
                my palette
            </button>
        // {/*// </Link>*/}
    );
}

export default MyColorPaletteButton;