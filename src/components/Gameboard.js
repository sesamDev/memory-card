import "../styles/Gameboard.css";

import React, { useEffect, useState } from "react";

import CardSpawner from "./CardSpawner";
import Score from "./Score";

const cardAlreadySelected = (card, selectedCards) => {
  return selectedCards.includes(card);
};

const Gameboard = () => {
  const [level, setLevel] = useState(() => 1);
  const [highScore, setHighScore] = useState(() => 0);
  const [gameOver, setgameOver] = useState(() => false);
  const [selectedCards, setselectedCards] = useState(() => []);
  console.log(level);

  useEffect(() => {
    if (gameOver) {
      console.log("GAME OVER");
      setselectedCards([]);
      setHighScore(selectedCards.length - 1);
      setLevel(1);
    }

    //Increase level
    if (selectedCards.length === 4 && !gameOver) {
      console.log("Next level");
      setLevel((prevLevel) => prevLevel + 1);
    }
    if (selectedCards.length === 6 && !gameOver) {
      console.log("Next level");
      setLevel((prevLevel) => prevLevel + 1);
    }
    setgameOver(false);
  }, [gameOver, selectedCards.length]);

  return (
    <div className="App-gameboard">
      <Score currentScore={selectedCards.length} highScore={highScore} />
      <CardSpawner
        level={level}
        setselectedCards={setselectedCards}
        selectedCards={selectedCards}
        setgameOver={setgameOver}
      />
    </div>
  );
};

export default Gameboard;
