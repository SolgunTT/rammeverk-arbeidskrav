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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        if (wordIndex < words.length) {
          setWordIndex(wordIndex + 1);
        }
        setInputValue("");
        
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [wordIndex, words]);

  const handleInputChange = (e) => {
    const enteredChar = e.target.value;
    setInputValue(e.target.value);

    if (enteredChar === currentWord[matchCount]) {
      setMatchCount(matchCount + 1);
      setInputValue("");
    }
  };

  return (
    <div className="game-div">
      <h1 className="good-luck">Lykke til, {playerName}!</h1>
      <CountdownComponent />
      <PointComponent matchCount={matchCount} />
      <InputField value={inputValue} onChange={handleInputChange} />
      <div>
        <p>{currentWord}</p>
      </div>
    </div>
  );
};

export default GameComponent;
