import React from "react";
import "../App.css";

const HighscoreComponent = ({
  playerName,
  totalMatchCount,
  onTotalMatchCountChange,
}) => {
  return (
    <div className="highscore-div">
      <h1>Highscorelist</h1>
      <ul>
        <li>{playerName}</li>
        <li>{totalMatchCount}</li>
      </ul>
    
    </div>
  );
};

export default HighscoreComponent;
