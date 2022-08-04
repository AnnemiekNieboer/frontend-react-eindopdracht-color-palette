import React, {createContext, useState} from "react";


export const PaletteContext = createContext({});

function PaletteContextProvider({children}) {
    const [colorPaletteHexCodes, setColorPaletteHexcodes] = useState([])
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

    function addHexColorToPalette(newVal) {
        setColorPaletteHexcodes(prev => [...prev, newVal]);
    }

    function removeHexColorFromPalette(removeVal) {
        setColorPaletteHexcodes((current) => current.filter(element => {
            return element !== removeVal;
        }))
    }


    const data = {
        colorPalette: colorPaletteHexCodes,
        addHexColorFunction: addHexColorToPalette,
        removeHexColorFunction: removeHexColorFromPalette,
        colorPaletteOpen: colorPaletteOpen,
        setColorPaletteOpen: setColorPaletteOpen,
    }

    return (
        <PaletteContext.Provider value={data}>
            {children}
        </PaletteContext.Provider>
    )

}

export default PaletteContextProvider;