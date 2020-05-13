import React, { useState } from "react";

import {
  Wrapper,
  PlayerCard,
  Footer,
  Header,
} from '../../components';

import {
  Col,
  Container,
  Row
} from '../../layout';

import players from '../../players.json';


const GameBoard = () => {
    const [highScore, sethighScore] = useState(0);
    const [currentPts, setcurrentPts] = useState();
    const [winCount, setwinCount] = useState(0);
    const [numClick, setnumClick] = useState([]);
    const [friends, setFriends] = useState(players);


    const clickHandler = id => {
    let idClick = numClick
        if (idClick.indexOf(id) === -1) {
        handleIncrement()
        setnumClick(idClick.concat(id));
        handleRandomize()
        }
        else {
        handleRestart()
        }
    }

    const randomizer = (arr) => {
    let i, j; 
    for (i = arr.length-1; i>0; i--) {
        j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } 
    return arr;
    };

    const handleRandomize = () => { 
    let randomizePlayers = randomizer(friends);
    setFriends(randomizePlayers)
    }

    const handleIncrement = () => {
    const update = currentPts + 1;
    setcurrentPts(update)

    if (update >= highScore) {
        sethighScore(update)
        }
    
    else if (update === 10) {
        const winNum = winCount + 1;
        setwinCount(winNum)
    }
    }


    const handleRestart = () => {
    
    setwinCount(winCount)
    sethighScore(highScore)
    setcurrentPts(0)
    setnumClick([])
    }

    return (
    <Container className="gameboard">
    <Header
    highScore={highScore}
    totalWins={winCount}
    points={currentPts}
    />
    <Wrapper>
    {players.map(friend => (
        <PlayerCard
        clickHandler={clickHandler}
        handleRandomize={handleRandomize}
        handleIncrement={handleIncrement}
        handleRestart={handleRestart}
        id={friend.id}
        image={friend.image}
        />
    ))}
    </Wrapper>
    <Footer>
        <h3>Adam Verma</h3>  
    </Footer>
    </Container>
    );
};

export default GameBoard;