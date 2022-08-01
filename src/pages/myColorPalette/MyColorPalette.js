import React, {useState} from "react";
import "./MyColorPalette.css";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";

function MyColorPalette() {
    return (
        <div className="my-color-palette__container">
            <div className="my-color-palette__closing-button">
            </div>
            <h2 className="my-color-palette__title">My Color Palette</h2>
            <h4 className="my-color-palette__under-title">Selected colors</h4>

            <div className="my-color-palette-color-items__outer-container">
                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

                <div className="my-color-palette-color-item__inner-container">
                    <div className="my-color-palette-color-item__color-block">
                    </div>
                    <div className="my-color-palette-color-item__text-block">
                        <p className="my-color-palette-text-block__hex-code">#ffffff</p>
                        <Link className="my-color-palette-text-block__hex-code-link">copy hexcode</Link>
                    </div>
                </div>

            </div>
            <Button
            type="button"
            text="export as pdf"
            />

        </div>
    );
}

export default MyColorPalette;