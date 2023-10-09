import React, { useState, useEffect } from "react";
import Høst from "../Høst.json";
import CountdownComponent from "./CountdownComponent";
import InputField from "./InputField";
import PointComponent from "./PointComponent";
import HighscoreButton from "./HighscoreButton";
import HighscoreComponent from "./HighscoreComponent";
import { storeHighScore } from "../localStorageUtils";
import "../App.css";

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
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [seehighS, setseehighS] = useState(false);

  useEffect(() => {
    // Event listener for keydown events
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (inputValue === currentWord) {
          // Add points for correct word
          const finalTotalMatchCount = totalMatchCount + 50;
          onTotalMatchCountChange(finalTotalMatchCount);
          if (consecutiveCorrect === 2) {
            // Add bonus points for third consecutive correct word
            const extraPoints = finalTotalMatchCount + 100;
            onTotalMatchCountChange(extraPoints);
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

    // Add event listener for keydown
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    currentWord,
    inputValue,
    totalMatchCount,
    consecutiveCorrect,
    words.length,
    onTotalMatchCountChange,
  ]);

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);

    if (
      enteredText[enteredText.length - 1] ===
      currentWord[enteredText.length - 1]
    ) {
      // Add points for correct character input
      const finalTotalMatchCount = totalMatchCount + 1;
      onTotalMatchCountChange(finalTotalMatchCount);
    } else {
      if (minusMatchCount < 5) {
        // Deduct points for incorrect character input (up to 5 times)
        const finalTotalMatchCount = totalMatchCount - 1;
        onTotalMatchCountChange(finalTotalMatchCount);
        setMinusMatchCount((prevCount) => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    // Reset the count of incorrect character inputs
    setMinusMatchCount(0);
  }, [currentWord]);

  useEffect(() => {
    // Calculate the player's final score and store the high score when the game ends
    const finalScore = totalMatchCount;
    if (countdownComplete && finalScore !== 0) {
      storeHighScore(playerName, finalScore);
    }
  }, [countdownComplete, playerName, totalMatchCount]);

  const seeHighScore = () => {
    // Display high scores when the HighscoreButton is clicked
    setseehighS(true);
  };

  return (
    <div className="game-div">
      {countdownComplete ? (
        seehighS ? (
          <HighscoreComponent
            totalMatchCount={totalMatchCount}
            onTotalMatchCountChange={onTotalMatchCountChange}
            playerName={playerName}
          />
        ) : (
          <HighscoreButton seeHighScore={seeHighScore} />
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
