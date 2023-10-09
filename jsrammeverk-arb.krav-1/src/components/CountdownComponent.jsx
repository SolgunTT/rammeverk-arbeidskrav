import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../App.css";
import HighscoreButton from "./HighscoreButton";
import HighscoreComponent from "./HighscoreComponent"; // Import HighscoreComponent

const CountdownComponent = ({ countdownComplete, setCountdownComplete, userInput }) => {
  const [countdown, setCountdown] = useState(1);
  const [belowZero, setBelowZero] = useState(false);
  const [seehighS, setseehighS] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown <= 0) {
        clearInterval(intervalId);
        setBelowZero(true);
        // Notify the parent component that countdown is complete
        setCountdownComplete(true);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown, setCountdownComplete]);

 

  // Countdown number disappears when below zero
  return (
    <div className="game-div">
      {belowZero ? (
        <>
          <p></p>
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
