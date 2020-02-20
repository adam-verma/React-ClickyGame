import React from "react";
import "./GameCard/style.css";

function GameCard(props) {
  return <div className="gameCard">{props.children}</div>;
}

export default GameCard;
