import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  FriendCard,
  Footer,
  Header,
} from './components';
import players from './friends.json';

const App = () => {
    const [click, setClick] = useState({
      players,
      highScore: 0,
      currentPts: 0,
      winCounter: 0,
      message: "",
      numClick: []
    });
  
    const clickHandler = id => {
        if (click.numClick.indexOf(id) === -1) {
          handleIncrement()
          setClick({
            numClick: click.numClick.concat(id)
          });
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
      let randomizePlayers = randomizer(players);
      setClick({
        players: randomizer
      })
    }

    const handleIncrement = () => {
      const update = click.currentPts + 1;
      setClick({
        currentPts: update,
        message: ""
      });
      if (update >= click.highScore) {
        setClick({
            highScore: update
        })
      }
      else if (update === 10) {
        setClick({
          message: "Game won!!", 
          winCounter: winCounter+1 
        })
      }
      }


    const handleRestart = () => {
      setClick({
        highScore: click.highScore,
        currentPts: 0,
        winCounter: winCounter,
        message: "Game lost :( ",
        numClick: []
      })
    }
    return (
      <Wrapper>
        <Header
        highScore={click.highScore}
        totalWins={click.winCounter}
        points={click.currentPts}
        />
     
        <Title>
          <h1>Welcome to the Tile Clicking Game. Don't duplicate the clicks! </h1>
        </Title>
        {click.players.map(friend => (
          <FriendCard
            clickHandler={clickHandler}
            handleRandomize={handleRandomize}
            handleIncrement={handleIncrement}
            handleRestart={handleRestart}
            id={friend.id}
            image={friend.image}
          />
        ))}
      <Footer>
        <h3>Copyright</h3>  
      </Footer>
      </Wrapper>
    );
        }


export default App;
