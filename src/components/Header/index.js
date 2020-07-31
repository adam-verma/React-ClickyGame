import React from "react";
import "../Header/style.css";

const Header = props => (
  <header>
    <h1 className="title">Remember the Sports Titans</h1>
    <nav className="navbar navbar-expand-lg header">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" id="highScore">High Score: {props.highScore}</li>
          <li className="nav-item" id="winCounter">Total Wins: {props.totalWins}</li>
          <li className="nav-item" id="currentPts">Current Score: {props.points}</li>
          <li className="nav-item button" type="button" id="reset"
            onClick={() => props.handleReset()}
            >Reset Game!</li>
        </ul>
      </div>
    </nav>
  </header>
  )

export default Header;
