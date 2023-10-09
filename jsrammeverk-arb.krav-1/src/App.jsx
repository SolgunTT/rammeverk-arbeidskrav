// App.jsx

import React, { useState } from "react";
import "./App.css";
import StartComponent from "./components/StartComponent";

function App() {
  const [name, setName] = useState(""); // Create state to hold the name
  const [totalMatchCount, setTotalMatchCount] = useState(0); // Create state for totalMatchCount

  const handleNameChange = (newName) => {
    setName(newName); // Update the name state when the name changes in StartComponent
    console.log("Name changed to:", newName);
  };

  const handleTotalMatchCountChange = (newTotalMatchCount) => {
    setTotalMatchCount(newTotalMatchCount); // Update the totalMatchCount state
    console.log("Total Match Count changed too:", newTotalMatchCount);
  };

  return (
    <div>
      <StartComponent
        playerName={name}
        onNameChange={handleNameChange}
        totalMatchCount={totalMatchCount} // Pass totalMatchCount to StartComponent
        onTotalMatchCountChange={handleTotalMatchCountChange} // Pass callback function to update totalMatchCount
      />
    </div>
  );
}

export default App;
