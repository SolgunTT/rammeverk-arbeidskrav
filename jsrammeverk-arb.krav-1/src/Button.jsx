import React from "react";
import "./App.css"

const Button = ({ children }) => {


    return (
<button className="shared-button">{children}</button>
)
};

export default Button;