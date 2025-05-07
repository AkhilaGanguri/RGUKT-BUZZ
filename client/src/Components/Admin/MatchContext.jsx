import React, { createContext, useState, useEffect } from 'react';

const MatchContext = createContext();

const MatchProvider = ({ children }) => {
  const [matches, setMatches] = useState(() => {
    const savedMatches = localStorage.getItem('matches');
    return savedMatches ? JSON.parse(savedMatches) : [
      { date: "2024-04-13 | 18:00:00", game: "Palnadu vs Guntur", result: "to be held" }
    ];
  });

  useEffect(() => {
    const interval = setInterval(cleanupMatches, 1 * 1 * 1000); // Runs every hour
    return () => clearInterval(interval);
  }, [matches]);

  useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches));
  }, [matches]);

  const addMatch = (match) => {
    setMatches([match, ...matches]);
  };

  const updateMatch = (updatedMatch) => {
    setMatches(matches.map(match => 
      match.teams === updatedMatch.teams ? updatedMatch : match
    ));
  };

  const removeMatch = (teams) => {
    setMatches(matches.filter(match => match.teams !== teams));
  };

  const cleanupMatches = () => {
    const now = new Date();
    setMatches(matches.filter(match => {
      const matchDate = new Date(match.date);
      return now - matchDate < 24 * 60 * 60 * 1000; // Keep matches within the last 24 hours
    }));
  };

  return (
    <MatchContext.Provider value={{ matches, addMatch, updateMatch, removeMatch }}>
      {children}
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
