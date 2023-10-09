import React, { useState } from "react";
import StartButton from "./StartButton";
import InputField from "./InputField";
import GameComponent from "./GameComponent";

const StartComponent = ({
  onNameChange,
  totalMatchCount,
  onTotalMatchCountChange,
}) => {
  // State to manage user input name
  const [name, setName] = useState("");
  // State to display the entered name
  const [displayedName, setDisplayedName] = useState("");
  // State to track whether the game has started
  const [isGameStarted, setIsGameStarted] = useState(false);

  // Function to handle name input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Function to handle start button click
  const handleButtonClick = () => {
    setDisplayedName(name);
    setName("");
    setIsGameStarted(true);
    onNameChange(name); // Call onNameChange with the new name
  };

  return (
    <div>
      {isGameStarted ? (
        <GameComponent
          playerName={displayedName}
          totalMatchCount={totalMatchCount}
          onTotalMatchCountChange={onTotalMatchCountChange}
        />
      ) : (
        <div className="start-component">
          <InputField value={name} onChange={handleInputChange} />
          <StartButton onClick={handleButtonClick} />
        </div>
      )}
    </div>
  );
};

export default StartComponent;
