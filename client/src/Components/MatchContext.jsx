import React, { createContext, useState } from 'react';

export const MatchContext = createContext();

const MatchContextProvider = (props) => {
  const [matches, setMatches] = useState([
    { date: '2023-07-18', time: '10:00', game: 'KABADDI', teams: 'Team A vs Team B', result: 'Pending' }
    // Add more sample matches as needed
  ]);
  const [email, setEmail] = useState('example@example.com');

  const addMatch = (match) => {
    setMatches([...matches, match]);
  };

  const updateMatch = (index, updatedMatch) => {
    const newMatches = [...matches];
    newMatches[index] = updatedMatch;
    setMatches(newMatches);
  };

  const removeMatch = (index) => {
    const newMatches = matches.filter((_, i) => i !== index);
    setMatches(newMatches);
  };

  return (
    <MatchContext.Provider value={{ matches, email, addMatch, updateMatch, removeMatch }}>
      {props.children}
    </MatchContext.Provider>
  );
};

export default MatchContextProvider;
