import React from "react";
import Button from "./Button";

const HighscoreComponent = ({ playerName }) => {
  return (
    <>
      <Button />
      <p>{playerName}</p>
    </>
  );
};

export default HighscoreComponent;
