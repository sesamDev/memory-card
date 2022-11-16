import "../styles/Gameboard.css";

import React, { useEffect, useState } from "react";

import CardSpawner from "./CardSpawner";
import Score from "./Score";

const Gameboard = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App-gameboard">
      <Score />
      <CardSpawner level={level} />
    </div>
  );
};

export default Gameboard;
