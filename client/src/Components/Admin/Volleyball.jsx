import React, { useState, useEffect } from 'react';
import './Live.css';

const Volleyball = ({ gameId, onSubmit, onEnd }) => {
  const [submitted, setSubmitted] = useState(false);
  const [link, setLink] = useState(''); // Add link state
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "Team A",
      players: [
        { name: "Player 1" },
        { name: "Player 2" },
        { name: "Player 3" },
        { name: "Player 4" },
        { name: "Player 5" },
        { name: "Player 6" },
        { name: "Player 7" },
      ],
      score: 0,
      currentSet: 1,
    },
    {
      id: 2,
      name: "Team B",
      players: [
        { name: "Player 1" },
        { name: "Player 2" },
        { name: "Player 3" },
        { name: "Player 4" },
        { name: "Player 5" },
        { name: "Player 6" },
        { name: "Player 7" },
      ],
      score: 0,
      currentSet: 1,
    },
  ]);

  useEffect(() => {
    if (gameId) {
      fetchGameDetails();
    }
  }, [gameId]);

  const fetchGameDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3005/volleyball/${gameId}`);
      const data = await response.json();
      setTeams(data.teams);
      setLink(data.link); // Set the link
      setSubmitted(true);
    } catch (error) {
      console.error('Error fetching game details:', error);
    }
  };

  const handleTeamNameChange = (id, newName) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === id ? { ...team, name: newName } : team))
    );
  };

  const handlePlayerNameChange = (teamId, playerId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, selectedPlayer: team.players[playerId] } : team
      )
    );
  };

  const handleScoreChange = (id, newScore) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === id ? { ...team, score: newScore } : team))
    );
  };

  const handleSetChange = (id, newSet) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) => (team.id === id ? { ...team, currentSet: newSet } : team))
    );
  };

  const getWinner = () => {
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    return sortedTeams[0].score === sortedTeams[1].score ? "Tie" : sortedTeams[0].name;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const winner = getWinner();
    const url = gameId ? `http://localhost:3005/volleyball/${gameId}` : "http://localhost:3005/volleyball";
    const method = gameId ? "PUT" : "POST";
    const message = gameId ? "edited" : "saved";
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const winner = getWinner();
  //   const url = "http://localhost:3005/volleyball";
  //   const method = submitted ? "PUT" : "POST";
  //   const message = submitted ? "edited" : "saved";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameType: "volleyball", teams, winner, link }), // Include link
      });
      if (response.ok) {
        console.log(response);
        alert(`Data ${message}`);
        setSubmitted(true);
        onSubmit();
      } else {
        console.error(`Failed to ${message} data`);
      }
    } catch (error) {
      console.error(`Error ${message} data:`, error);
    }
  };

  const handleEnd = () => {
    const gameData = {
      game: "VOLLEYBALL",
      date: new Date().toLocaleDateString(),
      teams: teams.map((team) => team.name),
      winner: getWinner(),
      link, // Include link
    };

    const pastGames = JSON.parse(localStorage.getItem('pastGames')) || [];
    pastGames.push(gameData);
    localStorage.setItem('pastGames', JSON.stringify(pastGames));
    alert("Game ended and data saved to past games.");
    
    // Trigger the onEnd callback if it's passed as a prop
    if (onEnd) {
      onEnd("volleyball", gameData);
    }
  };

  return (
    <div className="dropdown-content">
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Players</th>
            <th>Score</th>
            <th>Current Set</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id}>
              <td>
                <input
                  type="text"
                  value={team.name}
                  onChange={(e) => handleTeamNameChange(team.id, e.target.value)}
                />
              </td>
              <td>
                <select
                  value={team.selectedPlayer ? team.selectedPlayer.name : ""}
                  onChange={(e) =>
                    handlePlayerNameChange(
                      team.id,
                      team.players.findIndex((player) => player.name === e.target.value)
                    )
                  }
                >
                  {team.players.map((player, index) => (
                    <option key={index} value={player.name}>
                      {player.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="number"
                  value={isNaN(team.score) ? 0 : team.score}
                  onChange={(e) => handleScoreChange(team.id, parseInt(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={team.currentSet}
                  onChange={(e) => handleSetChange(team.id, parseInt(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
            Video Link:{" "}
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter live video link"
            />
          </p>



      <p>
        Winner:{" "}
        <button type="button" className="btn btn-success">
          {getWinner()}
        </button>
      </p>
    
      <button onClick={handleSubmit} type="submit" className="save-button">
        {submitted ? "Edit" : "Submit"}
      </button>
      <button onClick={handleEnd} type="button" className="end-button">
        End
      </button>
    </div>
  );
};

export default Volleyball;