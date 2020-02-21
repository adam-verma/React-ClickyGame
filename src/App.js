import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  FriendCard,
  Footer,
  Header,
  GameCard,
} from './components';
import friendsData from './friends.json';

const App = () => {
    const [friends, setFriends] = useState(friendsData);
    let friends = 
    // const removeFriend = id => {
    //   const filteredFriends = friends.filter(friend => friend.id !== id);

    //   setFriends(filteredFriends);
    // };

    const clickHandler = id => {
        const isClicked = friends.filter()
    }
    
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {friends.map(friend => (
          <FriendCardExtended
            removeFriend={removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
}

export default App;
