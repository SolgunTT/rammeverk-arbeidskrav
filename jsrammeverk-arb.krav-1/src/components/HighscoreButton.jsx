import React from "react";
import Button from "./Button";
import "../App.css";

const HighscoreButton = ({ seeHighScore }) => {
  return (
    <Button
      className="highscore-button"
      label="See HighScore"
      onClick={seeHighScore}
    />
  );
};

export default HighscoreButton;
