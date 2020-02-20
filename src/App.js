import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  FriendCardExtended,
} from './components';
import friendsData from './friends.json';

const App = () => {
    const [friends, setFriends] = useState(friendsData);

    const removeFriend = id => {
      const filteredFriends = friends.filter(friend => friend.id !== id);

      setFriends(filteredFriends);
    };

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
