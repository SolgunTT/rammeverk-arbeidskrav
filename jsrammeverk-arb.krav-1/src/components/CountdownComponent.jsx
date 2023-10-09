import React, { useState, useEffect } from "react";
import "../App.css";

const CountdownComponent = ({ setCountdownComplete }) => {
  const [countdown, setCountdown] = useState(12);
  const [belowZero, setBelowZero] = useState(false);

  useEffect(() => {
    // Interval to decrement the countdown
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown <= 0) {
        clearInterval(intervalId);
        setBelowZero(true);
        setCountdownComplete(true);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup interval
    };
  }, [countdown, setCountdownComplete]);

  return (
    <div className="game-div">
      {belowZero ? (
        <>
          <p></p> {/* Empty when countdown is expired */}
        </>
      ) : (
        <div className="game-div">
          <p>Countdown: {countdown}</p> {/* Display countdown */}
        </div>
      )}
    </div>
  );
};

export default CountdownComponent;
