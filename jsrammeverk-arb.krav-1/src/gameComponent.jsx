import React from "react";
import CountdownComponent from "./CountdownComponent";
import WordComponent from "./WordComponent";
import InputField from "./InputField";


const GameComponent = ({ playerName }) => {
    
  return (
    <div>
      <h1 className="good-luck">Lykke til, {playerName}!</h1>
      <CountdownComponent />
      <WordComponent />
      <InputField />
    </div>
  );
};

export default GameComponent;
