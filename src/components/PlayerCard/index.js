import React from "react";
import "../PlayerCard/style.css";

const PlayerCard = ({
  id,
  name,
  image,
  clickHandler
}) => (
    <div 
    className="card">
      <div 
        className="img-container" id = {id}
        onClick={() => clickHandler(id)} className="click">
        <img alt={name} src={image} />
      </div>
    </div>
  );

export default PlayerCard;
