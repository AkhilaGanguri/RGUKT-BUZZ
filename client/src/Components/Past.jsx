import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Past.css';

const Past = () => {
  const [pastGames, setPastGames] = useState([]);

  useEffect(() => {
    const games = JSON.parse(localStorage.getItem('pastGames')) || [];
    setPastGames(games);
  }, []);

  return (
    <div className="past-container">
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Past</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Past Games</h2>
      <div className="games-list">
        
        {pastGames.map((game, index) => (
          <div key={index} className='box_item'>
            <div className='box_content'>
              <p><span className="label">Game:</span> {game.game}</p>
              <p><span className="label">Date:</span> {game.date}</p>
              <p><span className="label">Teams:</span> {game.teams.join(", ")}</p>
              <p><span className="label">Winner:</span> {game.winner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Past;
