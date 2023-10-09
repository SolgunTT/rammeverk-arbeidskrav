import React, { useState, useEffect } from "react";
import Høst from "../Høst.json";
import CountdownComponent from "./CountdownComponent";
import InputField from "./InputField";
import PointComponent from "./PointComponent";
import HighscoreButton from "./HighscoreButton";
import HighscoreComponent from "./HighscoreComponent";

const GameComponent = ({
  playerName,
  totalMatchCount,
  onTotalMatchCountChange,
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = Høst.ord;
  const currentWord = words[wordIndex];
  const [inputValue, setInputValue] = useState("");
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [minusMatchCount, setMinusMatchCount] = useState(0);
  const [countdownComplete, setCountdownComplete] = useState(false); // Countdown completion state
  const [seehighS, setseehighS] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (inputValue === currentWord) {
          const finalTotalMatchCount = totalMatchCount + 50;
          onTotalMatchCountChange(finalTotalMatchCount); // Notify App of the change
          if (consecutiveCorrect === 2) {
            const extraPoints = finalTotalMatchCount + 100;
            onTotalMatchCountChange(extraPoints); // Notify App of the change
            setConsecutiveCorrect(0);
          } else {
            setConsecutiveCorrect(consecutiveCorrect + 1);
          }
        } else {
          setConsecutiveCorrect(0);
        }
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setInputValue("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    currentWord,
    inputValue,
    totalMatchCount,
    consecutiveCorrect,
    words.length,
    onTotalMatchCountChange, // Add onTotalMatchCountChange to dependencies
  ]);

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);

    if (
      enteredText[enteredText.length - 1] ===
      currentWord[enteredText.length - 1]
    ) {
      const finalTotalMatchCount = totalMatchCount + 1;
      onTotalMatchCountChange(finalTotalMatchCount); // Notify App of the change
    } else {
      if (minusMatchCount < 5) {
        const finalTotalMatchCount = totalMatchCount - 1;
        onTotalMatchCountChange(finalTotalMatchCount); // Notify App of the change
        setMinusMatchCount((prevCount) => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    setMinusMatchCount(0);
  }, [currentWord]);

  useEffect(() => {
    console.log("countdownComplete:", countdownComplete);
  }, [countdownComplete]);

  const seeHighScore = () => {
    setseehighS(true);
  };

  return (
    <div className="game-div">
      {countdownComplete ? (
        seehighS ? ( // Check if seehighS is true
          <HighscoreComponent
            totalMatchCount={totalMatchCount}
            onTotalMatchCountChange={onTotalMatchCountChange}
          /> // Show HighscoreComponent when seehighS is true
        ) : (
          <HighscoreButton seeHighScore={seeHighScore} /> // Show HighscoreButton when seehighS is false
        )
      ) : (
        <>
          <h1 className="good-luck">Lykke til, {playerName}!</h1>

          <CountdownComponent
            setCountdownComplete={setCountdownComplete}
            userInput={playerName}
          />

          <PointComponent totalMatchCount={totalMatchCount} />
          <InputField value={inputValue} onChange={handleInputChange} />

          <p>{currentWord}</p>
        </>
      )}
    </div>
  );
};

export default GameComponent;
