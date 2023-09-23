import React from 'react';
import './App.css';
import HighscoreButton from './HighscoreButton';
import StartComponent from './StartComponent';
import CountdownComponent from './CountdownComponent';



function App() {
  return (
    <div>
    <StartComponent />
    <CountdownComponent />
    <hr></hr>
    <HighscoreButton />
    <hr></hr>
    </div>
    
  )
}

export default App;
