import React from "react";
import "./ImageBlock.css"

//Component for image block element on Inspiration page
function ImageBlock({src, alt}) {
    return (
        <div className="image-block">
            <img alt={alt} className="image-block__image"
            src={src}
            />
        </div>
    );
}

export default ImageBlock;