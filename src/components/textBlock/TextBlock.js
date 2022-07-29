import React from "react";
import "./textBlock.css"

function TextBlock({title, children}) {
    return (
        <article className="text-block">
            <h2>{title}</h2>
            {children}
        </article>
    );
}

export default TextBlock;