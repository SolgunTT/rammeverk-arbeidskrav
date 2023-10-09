// localStorageUtils.js

// Define a key for storing high scores in local storage
const HIGH_SCORES_KEY = "highScores";

// Function to get high scores from local storage
export const getHighScores = () => {
  const highScoresJSON = localStorage.getItem(HIGH_SCORES_KEY);
  return highScoresJSON ? JSON.parse(highScoresJSON) : [];
};

// Function to store high scores in local storage
export const storeHighScore = (playerName, score) => {
  const highScores = getHighScores();
  highScores.push({ playerName, score });
  highScores.sort((a, b) => b.score - a.score); // Sort in descending order
  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(highScores));
};
