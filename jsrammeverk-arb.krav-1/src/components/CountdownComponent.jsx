import React, { useState, useEffect } from "react";
import "../App.css";


const CountdownComponent = ({setCountdownComplete }) => {
  const [countdown, setCountdown] = useState(12);
  const [belowZero, setBelowZero] = useState(false);


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
