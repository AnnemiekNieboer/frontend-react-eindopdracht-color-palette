import React, {createContext, useState} from "react";


export const PaletteContext = createContext({});

function PaletteContextProvider({children}) {
    const [colorPaletteHexCodes, setColorPaletteHexcodes] = useState([])

    function addHexColorToPalette(newVal) {
        setColorPaletteHexcodes(prev => [...prev, newVal]);
    }

    const data = {
        colorPalette: colorPaletteHexCodes,
        addHexColorFunction: addHexColorToPalette,
    }

    return (
        <PaletteContext.Provider value={data}>
            {children}
        </PaletteContext.Provider>
    )

}

export default PaletteContextProvider;