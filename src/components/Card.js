import "../styles/Card.css";

import React from "react";

const Card = (props) => {
  return (
    <div className="App-card">
      <img src={props.img} alt="card" />
      <div className="App-card-line"></div>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Card;
