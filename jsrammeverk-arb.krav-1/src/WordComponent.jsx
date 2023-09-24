import React from "react";
import Høst from "./Høst.json";


const WordComponent = ( ) => {
  return (
    <div>
      {Høst.ord.map((ord, index) => (
        <p key={index}>{ord}</p>
      ))}
    </div>
  );
};

export default WordComponent;
