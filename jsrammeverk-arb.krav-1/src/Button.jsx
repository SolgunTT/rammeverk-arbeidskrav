import React from "react";
import "./App.css"

const Button = ({ onClick, label }) => {


    return (
<button onClick={onClick} className="shared-button">{label}</button>
)
};

export default Button;