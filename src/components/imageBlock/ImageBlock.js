import React from "react";
import "./ImageBlock.css"

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