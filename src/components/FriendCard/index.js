import React from "react";
import PropTypes from 'prop-types';
import "./style.css";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

const FriendCard = ({
    id,
    name,
    image,
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

FriendCard.propTypes = propTypes;

export default FriendCard;
