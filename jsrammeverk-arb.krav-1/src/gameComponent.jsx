import React from "react";
import InputField from "./InputField";

const GameComponent = ({ playerName }) => {

  return (
    <div>
      <h1>Lykke til, {playerName}!</h1>
<InputField></InputField>
    </div>
  );
};

export default GameComponent;
