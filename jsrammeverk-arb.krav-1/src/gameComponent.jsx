import React, { useState, useEffect } from "react";
import Høst from "./Høst.json";
import CountdownComponent from "./CountdownComponent";
import InputField from "./InputField";

const GameComponent = ({ playerName }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const words = Høst.ord;
  const currentWord = words[wordIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === " ") {
        // Check if there are more words to display
        if (wordIndex < words.length - 1) {
          setWordIndex(wordIndex + 1);
        }
        InputField.value = "";
      }
    };

    // Add a keydown event listener to the document
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [wordIndex, words]);

  return (
    <div>
      <h1 className="good-luck">Lykke til, {playerName}!</h1>
      <CountdownComponent />
      <InputField />
      <div>
        <p>{currentWord}</p>
      </div>
    </div>
  );
};

export default GameComponent;
