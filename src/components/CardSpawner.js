import "../styles/CardSpawner.css";

import React, { useEffect, useState } from "react";

import Card from "./Card.js";
import { cardData } from "../data/cardData";

const CardSpawner = (props) => {
  const [cardsAvailable, setcardsAvailable] = useState(() => cardData);
  const [cardsInPlay, setcardsInPlay] = useState(() => []);
  console.log(cardsAvailable);
  console.log(cardsInPlay);

  const randInt = (n) => {
    return Math.floor(Math.random() * (n - 0)) + 0;
  };

  const initCards = () => {
    let cardsToSpawn = 0;
    let cards = [];
    if (props.level === 1) {
      cardsToSpawn = 4;
    }
    if (props.level === 2) {
      cardsToSpawn = 6;
    }
    if (props.level === 3) {
      cardsToSpawn = 8;
    }

    let uniqueCards = cardsAvailable;
    for (let i = 0; i < cardsToSpawn; i++) {
      let card = uniqueCards[randInt(uniqueCards.length)];
      uniqueCards = uniqueCards.filter((c) => c.title !== card.title);
      cards.push(card);
    }

    return { cards, uniqueCards };
  };

  // Only call when mounted or when you reach a new level
  useEffect(() => {
    let { cards, uniqueCards } = initCards();
    setcardsInPlay(cards);
    setcardsAvailable(uniqueCards);
  }, [props.level]);

  const spawnCard = () => {
    return cardsInPlay.map((card) => {
      return <Card key={card.title} title={card.title} img={card.img} />;
    });
  };

  return <div className="App-cardspawner">{spawnCard()}</div>;
};

export default CardSpawner;
