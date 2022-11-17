import "../styles/CardSpawner.css";

import React, { useEffect, useState } from "react";

import Card from "./Card.js";
import { cardData } from "../data/cardData";

// Utility functions
const randInt = (n) => {
  return Math.floor(Math.random() * (n - 0)) + 0;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Handles spawning cards and shuffle them
const CardSpawner = (props) => {
  const [cardsAvailable, setcardsAvailable] = useState(() => cardData);
  const [cardsInPlay, setcardsInPlay] = useState(() => []);
  const [shuffleCards, setshuffleCards] = useState(false);
  console.log("cards in play: " + cardsInPlay.map((card) => card.title));
  console.log("===Shuffle cards: " + shuffleCards + "===");

  useEffect(() => {
    console.log("=== useEffect: Mount ===");
    if (cardsInPlay.length === 0) {
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
      setcardsInPlay(cards);
      setcardsAvailable(uniqueCards);
    }

    console.log("=== useEffect: Update ===");
    if (shuffleCards) {
      setcardsInPlay(() => shuffleArray(cardsInPlay));
    }
    setshuffleCards(false);
  }, [props.level, shuffleCards, cardsAvailable, cardsInPlay.length, cardsInPlay]);

  const spawnCard = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.title}
          title={card.title}
          img={card.img}
          shuffleCard={() => {
            console.log("Trigger update");
            setshuffleCards(true);
          }}
        />
      );
    });
  };

  return <div className="App-cardspawner">{spawnCard(cardsInPlay)}</div>;
};

export default CardSpawner;
