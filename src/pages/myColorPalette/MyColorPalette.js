import React, {useContext, useEffect, useState} from "react";
import "./MyColorPalette.css";
import {jsPDF} from "jspdf";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from "react-router-dom";

import Button from "../../components/button/Button";
import {PaletteContext} from "../../context/PaletteContext";
import {AuthContext} from "../../context/AuthContext";

//The My Color Palette page, shown as an overlay at the homepage
function MyColorPalette() {
    const {colorPalette, removeHexColorFunction, colorPaletteOpen, setColorPaletteOpen} = useContext(PaletteContext)
    const {isAuth} = useContext(AuthContext);
    const [pdfItemsHidden, togglePdfItemsHidden] = useState(true)
    const [colorPaletteIsEmpty, toggleColorPaletteIsEmpty] = useState(true)
    const [pdfLoading, togglePdfLoading] = useState(false);

    //Check if the color palette is empty and if so, you will see a message in the color palette
    useEffect(() => {
        if (colorPalette.length > 0) {
            toggleColorPaletteIsEmpty(false);
        } else toggleColorPaletteIsEmpty(true);
    }, [colorPalette, colorPaletteIsEmpty]);

    //Function which will create and export the PDF
    function createPdf() {
        togglePdfLoading(true)
        const doc = new jsPDF("p", "pt", "a4");
        togglePdfItemsHidden(false);

        doc.html(document.getElementById("pdf-my-color-palette"), {
            margin: [40, 60, 60, 60],
            callback: function (pdf) {
                pdf.save("MyColorPalette.pdf");
                togglePdfItemsHidden(true);
                togglePdfLoading(false)
            }
        })
    }

    return (
        <div
            className={colorPaletteOpen ? "my-color-palette-transition my-color-palette-opened" : "my-color-palette-transition my-color-palette-closed"}>
            <div className="my-color-palette__container">
                <button onClick={() => setColorPaletteOpen(false)} className="my-color-palette__closing-button">
                </button>
                <h2 className="my-color-palette__title">My Color Palette</h2>
                <h4 className="my-color-palette__under-title">Selected colors</h4>

                <div className="my-color-palette-color-items__outer-container">
                    {colorPaletteIsEmpty && <p>When you add colors to your color palette, you will find them here</p>}
                    {colorPalette.map((hexColor) => (
                        <div key={hexColor} className="my-color-palette-color-item__inner-container">
                            <div
                                className="my-color-palette-color-item__color-block"
                                style={{
                                    backgroundColor: `${hexColor}`,
                                }}
                                onClick={() => removeHexColorFunction(hexColor)}
                                aria-label="click to remove color from color palette"
                            >
                                <div aria-label="remove-item" className="color-block__remove-item-button"></div>
                            </div>
                            <div className="my-color-palette-color-item__text-block">
                                <p className="my-color-palette-text-block__hex-code">{hexColor}</p>
                                {isAuth ?
                                    <CopyToClipboard text={hexColor}>
                                        <Link to="#" className="my-color-palette-text-block__hex-code-link">copy
                                            #code</Link>
                                    </CopyToClipboard>
                                    :
                                    <Link onClick={() => setColorPaletteOpen(false)} to="/login" className="my-color-palette-text-block__hex-code-link">login to
                                        copy #code</Link>
                                }
                            </div>
                        </div>
                    ))}
                </div>
                {isAuth ?
                    <Button
                        onClick={createPdf}
                        type="primary"
                        text="export as pdf"
                    />
                    :
                    <Link to="/login" onClick={() => setColorPaletteOpen(false)}>
                        <Button
                            type="primary"
                            text="login to export as pdf"
                        />
                    </Link>
                }
                {pdfLoading && <p>pdf is loading...</p>}
                <div aria-label="code to create the pdf" hidden={pdfItemsHidden} id="pdf-my-color-palette">
                    <h1>My Color Palette</h1>
                    <div className="wrapper-pdf-container">
                        {colorPalette.map((hexColor) => (
                            <div key={hexColor} className="my-color-palette-color-item__inner-container">
                                <div
                                    className="my-color-palette-color-item__color-block"
                                    style={{
                                        backgroundColor: `${hexColor}`,
                                    }}
                                >
                                </div>
                                <div className="my-color-palette-color-item__text-block">
                                    <p className="my-color-palette-text-block__hex-code">{hexColor}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyColorPalette;