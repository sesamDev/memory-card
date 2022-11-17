import "../styles/Score.css";

import React from "react";

const Score = (props) => {
  return (
    <div className="App-score" id="appScore">
      <span id="score">Score:</span> {props.currentScore} <span id="bestScore">Best score:</span> {props.highScore}
    </div>
  );
};

export default Score;
