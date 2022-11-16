import "../styles/Score.css";

import React from "react";

const Score = () => {
  return (
    <div className="App-score" id="appScore">
      <span id="score">Score:</span> 0 <span id="bestScore">Best score:</span> 5
    </div>
  );
};

export default Score;
