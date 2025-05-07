//Scoreboard.jsx
import React, { useState } from 'react';
import Team from './Team';

const Scoreboard = () => {
  const [team1, setTeam1] = useState({ name: 'Team 1', score: 0, sets: 0 });
  const [team2, setTeam2] = useState({ name: 'Team 2', score: 0, sets: 0 });
  const [currentSet, setCurrentSet] = useState(1);
  const [setWinners, setSetWinners] = useState([]);
  const [matchWinner, setMatchWinner] = useState(null);
  const maxPointsPerSet = 25;
  const maxSets = 3;

  const incrementScore = (team, setTeam, opponent, setOpponent) => {
    if (matchWinner) return;

    setTeam(prevState => {
      const newScore = prevState.score + 1;
      if (newScore >= maxPointsPerSet) {
        const winner = prevState.name;
        setSetWinners([...setWinners, { set: currentSet, winner }]);

        const newSets = prevState.sets + 1;
        if (newSets >= 2) {
          setMatchWinner(winner);
        }

        setCurrentSet(currentSet + 1);
        return { ...prevState, score: 0, sets: newSets };
      }
      return { ...prevState, score: newScore };
    });

    if (team.score + 1 >= maxPointsPerSet) {
      setOpponent(prevState => ({ ...prevState, score: 0 }));
    }
  };

  const resetScores = () => {
    if (matchWinner) return;
    setTeam1({ ...team1, score: 0 });
    setTeam2({ ...team2, score: 0 });
  };

  return (
    <div className="scoreboard">
      <div className="teams">
        <Team
          team={team1}
          incrementScore={() => incrementScore(team1, setTeam1, team2, setTeam2)}
        />
        <Team
          team={team2}
          incrementScore={() => incrementScore(team2, setTeam2, team1, setTeam1)}
        />
      </div>
      <div className="current-set">
        <h2>Current Set: {currentSet}</h2>
        <button onClick={resetScores}>Next Set</button>
      </div>
      <div className="set-winners">
        <h2>Set Winners</h2>
        <ul>
          {setWinners.map((setWinner, index) => (
            <li key={index}>
              Set {setWinner.set}: {setWinner.winner}
            </li>
          ))}
        </ul>
      </div>
      {matchWinner && (
        <div className="match-winner">
          <h2>Match Winner: {matchWinner}</h2>
        </div>
      )}
    </div>
  );
};

export default Scoreboard;