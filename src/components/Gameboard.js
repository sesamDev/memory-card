import "../styles/Gameboard.css";

import CardSpawner from "./CardSpawner";
import React from "react";
import Score from "./Score";

const Gameboard = () => {
  return (
    <div className="App-gameboard">
      <Score />
      <CardSpawner />
    </div>
  );
};

export default Gameboard;
