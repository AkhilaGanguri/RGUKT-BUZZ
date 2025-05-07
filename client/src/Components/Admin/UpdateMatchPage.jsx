import React, { useState, useContext } from 'react';
import { MatchContext } from './MatchContext.jsx';

const UpdateMatchPage = () => {
  const { updateMatch, removeMatch } = useContext(MatchContext);
  const [formData, setFormData] = useState({
    game: '',
    team1: '',
    team2: '',
    time: '',
    date: '',
    result: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchDateTime = `${formData.date}T${formData.time}`;
    const updatedMatch = {
      game: formData.game,
      date: matchDateTime,
      teams: `${formData.team1} vs ${formData.team2}`,
      result: formData.result
    };
    updateMatch(updatedMatch);
  };

  const handleRemove = () => {
    const teams = `${formData.team1} vs ${formData.team2}`;
    removeMatch(teams);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      game: '',
      team1: '',
      team2: '',
      time: '',
      date: '',
      result: ''
    });
  };

  return (
    <div className="App">
      <h1>Update Match Details</h1>
      <form className="align" onSubmit={handleSubmit}>
        <div>
          <label>Game:</label>
          <input type="text" name="game" value={formData.game} onChange={handleChange} required />
        </div>
        <div>
          <label>Team 1:</label>
          <input type="text" name="team1" value={formData.team1} onChange={handleChange} required />
        </div>
        <div>
          <label>Team 2:</label>
          <input type="text" name="team2" value={formData.team2} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Result:</label>
          <input type="text" name="result" value={formData.result} onChange={handleChange} required />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleRemove}>Remove</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMatchPage;
