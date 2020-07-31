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

import playersData from '../../players.json';

import "./styles.css"

const GameBoard = () => {

    // Created initial value of state variables highSCore, currentPts, and winCount to 0 
    const [highScore, sethighScore] = useState(0);
    const [currentPts, setcurrentPts] = useState(0);
    const [winCount, setwinCount] = useState(0);

    // Set numClick to an array since it will store the id of clicked card
    const [numClick, setnumClick] = useState([]);

    // Store imported a json array into a state variable 
    const [players, setPlayers] = useState(playersData);

    // Defined clickHandler function being passed to PlayerCard component
    const clickHandler = name => {      
        // When PlayerCard is clicked check if player "name" is not in array, if not (-1) then execute if-statement
        if (numClick.indexOf(name) === -1) {
        
        handleIncrement()
        // Absorbs the new player "name" string into existing array with concat
        setnumClick(numClick.concat(name));
        
        handleRandomize()
        }
        // If player "name" is in array, then execute else-statement
        else {
        handleRestart()
        }
    }

    // Adds a new point to currentPts for clicking new PlayerCard
    const handleIncrement = () => {
        // Instantiate variable that adds point to currentPts
        const update = currentPts + 1;
        // Update the state of currentPts with new variable
        setcurrentPts(update)
        
        // Write first condition for upper limit of points
        if (update === 10) {
            // Instantiate variable that adds point to winCount 
            const winNum = winCount + 1;
            // Update the state of winNum
            setwinCount(winNum)
            // Update the state of high score to equal points
            sethighScore(update)
        }
        // Write second condition if new points is gte to present highScore 
        else if (update >= highScore) {
            // Update the state of highScore with new points value
            sethighScore(update)
        }
    }

    // Event handler for randomizing the board of players
    const handleRandomize = () => { 
        // Create a varable that uses players as an input to the function randomizer
        let randomizePlayers = randomizer(players);
        // Update state of players when handler is called
        setPlayers(randomizePlayers)
        }
    
    // Function that accepts any array as an argument and applies Math.random to randomize 
    const randomizer = (arr) => {
    let i, j; 
    for (i = arr.length-1; i>0; i--) {
        j = Math.floor(Math.random()*(i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    } 
    return arr;
    };


    const handleRestart = () => {
    
    setwinCount(winCount)
    sethighScore(highScore)
    setcurrentPts(0)
    setnumClick([])
    }

    const handleReset = () => {
    setwinCount(0)
    sethighScore(0)
    setcurrentPts(0)
    setnumClick([])
    }

    return (
    <Container className="gameboard">
    <Header
    highScore={highScore}
    totalWins={winCount}
    points={currentPts}
    handleReset={handleReset}
    />
    <Wrapper>
    {players.map(player => (
        <PlayerCard
        clickHandler={clickHandler}
        handleRandomize={handleRandomize}
        handleIncrement={handleIncrement}
        handleRestart={handleRestart}
        name={player.name}
        image={player.image}
        />
    ))}
    </Wrapper>
    <Footer 
    gameName={"Remember the Sports Titans"}
    >
    </Footer>
    </Container>
    );
};

export default GameBoard;