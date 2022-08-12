import React from 'react';
import { Link } from 'react-router-dom';
import './InspirationPage.css';
import Header from "../../components/header/Header";
import TextBlock from "../../components/textBlock/TextBlock";
import ImageBlock from "../../components/imageBlock/ImageBlock";
import placeholderImage from "../../assets/img/placeholder-image-1200px.jpg"
import Button from "../../components/button/Button";

function InspirationPage() {
    return (
        <div className="outer-container__reusable">
            <Header
                header="Artist of light: Johannes Vermeer"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <main className="inner-container__reusable">
                <TextBlock
                title="Title lorem ipsum"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TextBlock>
                <ImageBlock
                src={placeholderImage}
                />
                <TextBlock
                title="Title lorem ipsum"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/">
                        <Button
                            text="get inspired"
                            type="button"
                        />
                    </Link>

                </TextBlock>

            </main>
        </div>
    );
}

export default InspirationPage;