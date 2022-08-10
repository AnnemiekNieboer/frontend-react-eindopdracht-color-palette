import React, {useContext, useState} from "react";
import { jsPDF } from "jspdf";
import "./MyColorPalette.css";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {PaletteContext} from "../../context/PaletteContext";
import {AuthContext} from "../../context/AuthContext";

function MyColorPalette() {
    const {colorPalette, removeHexColorFunction, colorPaletteOpen, setColorPaletteOpen} = useContext(PaletteContext)
    const { isAuth } = useContext(AuthContext);
    const [pdfItemsHidden, togglePdfItemsHidden] = useState(true)

    console.log(isAuth);

    function createPdf() {
        const doc = new jsPDF("p", "pt", "a4");
        togglePdfItemsHidden(false);
        generatePdf();

        function generatePdf() {
            doc.html(document.getElementById("pdf-my-color-palette"),{
                margin: [40, 60, 60, 60],
                callback: function(pdf) {
                    pdf.save("MyColorPalette.pdf");
                    togglePdfItemsHidden(true);
                }
            })
        }

    }

    return (
        <div className={colorPaletteOpen ? "my-color-palette-transition my-color-palette-opened" : "my-color-palette-transition my-color-palette-closed"}>
            <div className="my-color-palette__container">
                <div onClick={() => setColorPaletteOpen(false)} className="my-color-palette__closing-button">
                </div>
                <h2 className="my-color-palette__title">My Color Palette</h2>
                <h4 className="my-color-palette__under-title">Selected colors</h4>

                <div className="my-color-palette-color-items__outer-container">
                    {colorPalette.map((hexColor) => (
                        <div className="my-color-palette-color-item__inner-container">
                            <div
                                className="my-color-palette-color-item__color-block"
                                style={{
                                    backgroundColor: `${hexColor}`,
                                }}
                                onClick={() => removeHexColorFunction(hexColor)}
                            >
                                <div aria-label="remove-item" className="color-block__remove-item-button"></div>
                            </div>
                            <div className="my-color-palette-color-item__text-block">
                                <p className="my-color-palette-text-block__hex-code">{hexColor}</p>
                                {isAuth ?
                                    <CopyToClipboard text={hexColor}>
                                        <Link to="#" className="my-color-palette-text-block__hex-code-link">copy #code</Link>
                                    </CopyToClipboard>
                                    :
                                    <Link to="/login" className="my-color-palette-text-block__hex-code-link">login to copy #code</Link>
                                }
                            </div>
                        </div>
                    ))}

                </div>

                <Button
                    onClick={createPdf}
                    type="primary"
                    text="export as pdf"
                />
                <div hidden={pdfItemsHidden} id="pdf-my-color-palette">
                    <h1>My Color Palette</h1>
                    <div className="wrapper-pdf-container">
                    {colorPalette.map((hexColor) => (
                        <div className="my-color-palette-color-item__inner-container">
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