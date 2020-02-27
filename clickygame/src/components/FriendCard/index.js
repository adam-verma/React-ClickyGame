import React from "react";
import "../FriendCard/style.css";

const FriendCard = ({
  id,
  name,
  image,
  clickHandler
}) => (
    <div 
    className="card" 
    id = {id}
    onClick={() => clickHandler(id)} className="click">
      <div 
        className="img-container">
        <img alt={name} src={image} />
      </div>
    </div>
  );

export default FriendCard;
