import React from "react";
import "./ImageBlock.css"

//Component for image block element on Inspiration page
function ImageBlock({src}) {
    return (
        <div className="image-block">
            <img className="image-block__image"
            src={src}
            />
        </div>
    );
}

export default ImageBlock;