import "../styles/CardSpawner.css";

import Card from "./Card.js";
import React from "react";
import { cardData } from "../data/cardData";

const CardSpawner = () => {
  return (
    <div className="App-cardspawner">
      <Card img={cardData[0].img} title={cardData[0].title} />
      <Card img={cardData[1].img} title={cardData[1].title} />
      <Card img={cardData[2].img} title={cardData[2].title} />
      <Card img={cardData[3].img} title={cardData[3].title} />
      <Card img={cardData[4].img} title={cardData[4].title} />
      <Card img={cardData[5].img} title={cardData[5].title} />
      <Card img={cardData[6].img} title={cardData[6].title} />
      <Card img={cardData[7].img} title={cardData[7].title} />
    </div>
  );
};

export default CardSpawner;
