// MatchContext.jsx
import React, { createContext } from 'react';

export const MatchContext = createContext();

export const MatchProvider = ({ children, value }) => (
  <MatchContext.Provider value={value}>
    {children}
  </MatchContext.Provider>
);
