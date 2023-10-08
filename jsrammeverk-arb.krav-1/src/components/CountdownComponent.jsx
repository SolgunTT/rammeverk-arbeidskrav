import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../App.css";
import HighscoreButton from "./HighscoreButton";
import HighscoreComponent from "./HighscoreComponent"; // Import HighscoreComponent

const CountdownComponent = ({ userInput }) => {
  const [countdown, setCountdown] = useState(1);
  const [belowZero, setBelowZero] = useState(false);
  const [seehighS, setseehighS] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown <= 0) {
        clearInterval(intervalId);
        setBelowZero(true);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  const seeHighScore = () => {
    setseehighS(true);
    console.log("lkd")
  };

  return (
    <div className="game-div">
      {belowZero ? (
        <>
          <p></p>
          {seehighS ? (
            <HighscoreComponent playerName={userInput} /> // Show HighscoreComponent when seehighS is true
          ) : (
            <HighscoreButton seeHighScore={seeHighScore} />
          )}
        </>
      ) : (
        <div className="game-div">
          <p>Countdown: {countdown}</p>
        </div>
      )}
    </div>
  );
};

export default CountdownComponent;
