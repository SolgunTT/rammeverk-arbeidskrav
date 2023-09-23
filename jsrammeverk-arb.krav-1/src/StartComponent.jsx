import React, { useState } from "react";
import StartButton from "./StartButton";
import InputField from "./InputField";
import GameComponent from "./GameComponent";


const StartComponent = () => {
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedName(name);
    setName("");
    setIsGameStarted(true);
  };

  return (
    <div>
      {isGameStarted ? (
      <GameComponent playerName={displayedName} />
      ) : (
        <div className="start-component">
          <InputField value={name} onChange={handleInputChange} />
          <StartButton onClick={handleButtonClick} />
          <p>{displayedName}</p>
        </div>
      )}
    </div>
  );
};

export default StartComponent;
