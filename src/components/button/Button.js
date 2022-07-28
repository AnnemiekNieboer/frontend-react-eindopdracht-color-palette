import React from "react";
import "./Button.css"

function Button({text, type}) {
    return (
        <button type={type} className="button__reuseable">
            {text} ->
        </button>
    );
}

export default Button;