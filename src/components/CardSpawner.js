import "../styles/CardSpawner.css";

import Card from "./Card.js";
import React from "react";
import { cardData } from "../data/cardData";

const CardSpawner = (props) => {
  const spawnCard = () => {
    let cardsToSpawn = 0;
    let cards = [];
    //const card = cardData[Math.floor(Math.random() * cardData.length)];
    if (props.level === 1) {
      cardsToSpawn = 4;
    }
    if (props.level === 2) {
      cardsToSpawn = 6;
    }
    if (props.level === 3) {
      cardsToSpawn = 8;
    }

    for (let i = 0; i < cardsToSpawn; i++) {
      cards.push(cardData[i]);
    }
    return cards;
  };
  return (
    <div className="App-cardspawner">
      {spawnCard().map((card) => {
        return <Card key={card.title} title={card.title} img={card.img} />;
      })}
    </div>
  );
};

export default CardSpawner;
