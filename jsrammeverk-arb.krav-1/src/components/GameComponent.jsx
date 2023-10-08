import React, { useState, useEffect } from "react";
import Høst from "../Høst.json";
import CountdownComponent from "./CountdownComponent";
import InputField from "./InputField";
import PointComponent from "./PointComponent";

const GameComponent = ({ playerName }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = Høst.ord;
  const currentWord = words[wordIndex];
  const [inputValue, setInputValue] = useState("");
  const [totalMatchCount, setTotalMatchCount] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [minusMatchCount, setMinusMatchCount] = useState(0);

  // 5 minuspoeng funker ikke

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (inputValue === currentWord) {
          setTotalMatchCount(totalMatchCount + 50); // Add 50 points for a correct word
          if (consecutiveCorrect === 2) {
            // If it's the third consecutive correct word, add 100 extra points
            setTotalMatchCount(totalMatchCount + 100);
            setConsecutiveCorrect(0); // Reset the counter
          } else {
            setConsecutiveCorrect(consecutiveCorrect + 1);
          }
        } else {
          setConsecutiveCorrect(0); // Reset the counter if the word is incorrect
        }
        // Advance to the next word or loop back to the first
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setInputValue(""); // Clear the input field
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentWord, inputValue, totalMatchCount, consecutiveCorrect, words.length]);
  
  
  

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);
  
    // Comparing the last letter in both variables
    if (
      enteredText[enteredText.length - 1] ===
      currentWord[enteredText.length - 1]
    ) {
      // If congruent, then add a point
      setTotalMatchCount(totalMatchCount + 1);
    } else {
      // If non-congruent, subtract a point with a maximum of -5
      if (minusMatchCount < 5) {
        setTotalMatchCount(totalMatchCount - 1); // Deduct a point for each wrong letter
        setMinusMatchCount((prevCount) => prevCount + 1);
      }
    }
  };
  
  // Add a useEffect to reset minusMatchCount when the word changes
  useEffect(() => {
    setMinusMatchCount(0);
  }, [currentWord]);
  
  

  return (
    <div className="game-div">
      <h1 className="good-luck">Lykke til, {playerName}!</h1>
      <CountdownComponent />
      <PointComponent totalMatchCount={totalMatchCount} />
      <InputField value={inputValue} onChange={handleInputChange} />
      <div>
        <p>{currentWord}</p>
      </div>
    </div>
  );
};

export default GameComponent;

