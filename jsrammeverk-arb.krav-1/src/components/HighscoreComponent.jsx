import React from "react";
import "../App.css";

const HighscoreComponent = ({ playerName, totalMatchCount, onTotalMatchCountChange }) => {
  return (
    <div className="highscore-div">
      <h1>Highscorelist</h1>
      <p>{playerName}</p>
      <p>{totalMatchCount}</p>
    </div>
  );
};

export default HighscoreComponent;
