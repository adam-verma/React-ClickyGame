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
        className="img-container" id = {name}
        onClick={() => clickHandler(name)} className="click">
        <img title={name} src={image} />  
      </div>
    </div>
  );

export default PlayerCard;
