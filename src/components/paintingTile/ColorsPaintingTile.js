import React, {useContext, useState} from "react";
import "./ColorsPaintingTile.css";
import {PaletteContext} from "../../context/PaletteContext";

//Component for the color buttons in the Painting Tile
function ColorsPaintingTile({hex, key}) {
    const {addHexColorFunction} = useContext(PaletteContext);
    const [colorSelected, toggleColorSelected] = useState(false);

    return (
        <button
            aria-label={`add color ${hex}`}
            type="button"
            className={`color-list__list-item ${colorSelected ? "color-added-to-palette" : ""}`}
            onClick={() => {
                addHexColorFunction(hex);
                toggleColorSelected(true)
            }}
            onAnimationEnd={() => toggleColorSelected(false)}
            key={key}
            style={{
                backgroundColor: `${hex}`,
            }}
        >
        </button>
    );
}

export default ColorsPaintingTile;