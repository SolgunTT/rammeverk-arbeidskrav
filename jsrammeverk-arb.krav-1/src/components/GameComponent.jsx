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
  const [matchCount, setMatchCount] = useState(0);
  const [totalMatchCount, setTotalMatchCount] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0); 





  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (wordIndex < words.length) {
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
          setWordIndex(wordIndex + 1);
          setInputValue(""); // Clear the input field
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [wordIndex, words, currentWord, inputValue, totalMatchCount, consecutiveCorrect]);


 

  const handleInputChange = (e) => {
    const enteredText = e.target.value;
    setInputValue(enteredText);
  
    console.log(enteredText.length);

// Comparing the last letter in both variables
    if (enteredText[enteredText.length - 1] === currentWord[enteredText.length - 1]) {
      setMatchCount(enteredText.length);
      setTotalMatchCount(totalMatchCount + 1)
    } else {
      setMatchCount(0); // Reset matchCount if the entered text doesn't match
      setTotalMatchCount(totalMatchCount - 1); // Deduct a point for each wrong letter
    }

    
  };

  
  


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
