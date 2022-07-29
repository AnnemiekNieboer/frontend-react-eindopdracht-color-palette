import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import instagramLogo from "../../assets/icons/instagram-logo.png";
import linkedinLogo from "../../assets/icons/linkedin-logo.png";
import tiktokLogo from "../../assets/icons/tik-tok-logo.png";

function Footer() {
    return (
        <footer className="outer-container__reusable">
            <div className="inner-container__reusable footer-container">
                <div className="footer__link-section">
                    <div>
                        <h3 className="footer__heading">About</h3>
                        <Link className="footer__link" to="/">About Color Palette</Link>
                    </div>
                    <div className="footer__social-section">
                        <h3 className="footer__heading">Social</h3>
                        <div className="footer-social-section__icons">
                            <a href="/">
                                <img src={instagramLogo}/>
                            </a>
                            <a href="/">
                                <img src={linkedinLogo}/>
                            </a>
                            <a href="/">
                                <img src={tiktokLogo}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright-section">
                    <p className="footer-copyright-section__paragraph">This website is inspired by the color palette of 'The Milkmaid' by Johannes Vermeer</p>
                    <p className="footer-copyright-section__copyright">© Annemiek Nieboer 2022 </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;