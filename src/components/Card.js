import "../styles/Card.css";

import React from "react";

const cardAlreadySelected = (card, selectedCards) => {
  return selectedCards.includes(card);
};
const Card = (props) => {
  return (
    <div
      className="App-card"
      onClick={() => {
        if (cardAlreadySelected(props.title, props.selectedCards)) {
          console.log("Already clicked that card");
          props.setgameOver(true);
        }
        props.shuffleCard();
        props.setselectedCards((prev) => [...prev, props.title]);
      }}
    >
      <img src={props.img} alt="card" />
      <div className="App-card-line"></div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Card;
