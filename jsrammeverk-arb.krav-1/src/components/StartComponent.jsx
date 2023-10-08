import React, { useState } from "react";
import StartButton from "./StartButton";
import InputField from "./InputField";

const StartComponent = ({ onGameStart }) => {
  const [name, setName] = useState("");
  const [displayedName, setDisplayedName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayedName(name);
    setName("");
    onGameStart(); // Call the callback function to start the game
  };

  return (
    <div className="start-component">
      <InputField value={name} onChange={handleInputChange} />
      <StartButton onClick={handleButtonClick} />
      <p>{displayedName}</p>
    </div>
  );
};

export default StartComponent;
