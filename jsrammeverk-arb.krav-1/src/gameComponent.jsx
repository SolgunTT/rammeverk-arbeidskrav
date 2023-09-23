import React from "react";
import CountdownComponent from "./CountdownComponent";
import WordComponent from "./WordComponent";

const GameComponent = ({ playerName }) => {


  return (
    <div>
      <h1 className="good-luck" >Lykke til, {playerName}!</h1>
<CountdownComponent />
<WordComponent />
    </div>
  );
};

export default GameComponent;
