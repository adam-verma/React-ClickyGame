import React from "react";
import "../FriendCard/style.css";

const FriendCard = props => (
    <div 
    className="card" 
    id = {props.id}
    onClick={() => props.clickHandler(props.id)} className="click">
      <div 
        className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default FriendCard;
