import React from "react";
import "../App.css";

const HighscoreComponent = ({ playerName, totalMatchCount }) => {
  return (
    <div className="highscore-div">
      <h1>Highscorelist</h1>
      <p>{playerName}</p>
    </div>
  );
};

export default HighscoreComponent;
