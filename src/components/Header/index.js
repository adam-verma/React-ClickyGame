import React from "react";
import "../Header/style.css";

const Header = props => (
  <nav className="navbar navbar-expand-lg header">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/adam-verma/React-ClickyGame">{props.gameName}</a>
        </li>
        <li className="nav-item" id="highScore">{props.highScore}></li>
        <li className="nav-item" id="winCounter">{props.totalWins}</li>
        <li className="nav-item" id="currentPts">{props.points}</li>
      </ul>
    </div>
  </nav>
  )

export default Header;
