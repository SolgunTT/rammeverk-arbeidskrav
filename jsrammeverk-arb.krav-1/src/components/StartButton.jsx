import React from "react";
import Button from "./Button";
import "../App.css";

const StartButton = ({ onClick }) => {
  return <Button label="Start" onClick={onClick} />;
};

export default StartButton;
