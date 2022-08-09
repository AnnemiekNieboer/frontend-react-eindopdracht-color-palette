import React, {useContext, useState} from "react";
import "./ColorsPaintingTile.css";
import {PaletteContext} from "../../context/PaletteContext";

function ColorsPaintingTile({hex}) {
    const {addHexColorFunction} = useContext(PaletteContext);
    const [colorSelected, toggleColorSelected] = useState(false);

    return (
        <button
            className={`color-list__list-item ${colorSelected ? "color-added-to-palette" : ""}`}
            onClick={() => {
                addHexColorFunction(hex);
                toggleColorSelected(true)
            }}
            onAnimationEnd={() => toggleColorSelected(false)}
            key={hex}
            style={{
                backgroundColor: `${hex}`,
            }}
        >
        </button>
    );
}

export default ColorsPaintingTile;