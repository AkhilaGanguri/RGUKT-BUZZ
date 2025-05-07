//Team.jsx
import React from 'react';

const Team = ({ team, incrementScore }) => {
  return (
    <div className="team">
      <h2>{team.name}</h2>
      <p>Score: {team.score}</p>
      <p>Sets Won: {team.sets}</p>
      <button onClick={incrementScore}>Increment Score</button>
    </div>
  );
};

export default Team;