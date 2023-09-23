import React, { useState, useEffect } from 'react';

const CountdownComponent = () => {
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);

      if (countdown === 0 ) {
        clearInterval(intervalId);
        console.log("funker her,da")

      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  return (
    <div>
      <p>Countdown: {countdown}</p>
    </div>
  );
};

export default CountdownComponent;
