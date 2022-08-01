import React from 'react';
import "./Checkbox.css";

function Checkbox({className, labelName, value, checked, colorFunction, hexColor}) {


    return (
        <label
            className={className}
            htmlFor={labelName}
        >
            <input
                type="checkbox"
                id={labelName}
                name={labelName}
                value={value}
                checked={checked}
                onChange={() => colorFunction({hexColor})}
            />
            <span className="checkbox__checkmark"></span>
        </label>
    );
}

export default Checkbox;