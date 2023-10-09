import React from "react";
import { getHighScores } from "../localStorageUtils"; // Import the utility function

const HighscoreComponent = () => {
  const highScores = getHighScores();


  return (
    <div className="highscore-div">
      <h1>Highscorelist</h1>
      <ul>
        {highScores.map((score, index) => (
          <li key={index}>
            {score.playerName}: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HighscoreComponent;
