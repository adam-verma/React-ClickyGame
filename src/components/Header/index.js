import React from "react";
import "../Header/style.css";

const Header = props => (
  <div className="header">
    <h1 className="title">Athlete Clicks</h1>
    <nav className="navbar navbar-expand-lg header">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/adam-verma/React-ClickyGame">{props.gameName}</a>
          </li>
          <li className="nav-item" id="highScore">High Score: {props.highScore}</li>
          <li className="nav-item" id="winCounter">Total Wins: {props.totalWins}</li>
          <li className="nav-item" id="currentPts">Current Score: {props.points}</li>
        </ul>
      </div>
    </nav>
  </div>
  )

export default Header;
