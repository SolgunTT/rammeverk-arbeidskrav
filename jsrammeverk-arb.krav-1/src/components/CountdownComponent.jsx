import React, { useState, useEffect } from "react";
import Button from "./Button";
import "../App.css";


const CountdownComponent = ({ userInput }) => {
  const [countdown, setCountdown] = useState(120);
  const [belowZero, setBelowZero] = useState(false);

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

  return (
    <div className="game-div">
      {belowZero ? (
        <>
        <p>Time's up!</p>
        <Button value="Se Highscore" />
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
