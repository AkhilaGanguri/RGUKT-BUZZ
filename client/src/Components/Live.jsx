import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Spinner from 'react-bootstrap/Spinner';
import './Live.css';
import axios from 'axios';

const Live = () => {
  const [kabaddiData, setKabaddiData] = useState(null);
  const [volleyballData, setVolleyballData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentlyUpdatedGame, setRecentlyUpdatedGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [kabaddiResponse, volleyballResponse] = await Promise.all([
          axios.get('http://localhost:3005/adminlive'),
          axios.get('http://localhost:3005/volleyball'),
        ]);

        const kabaddi = kabaddiResponse.data[0];
        const volleyball = volleyballResponse.data[0];

        setKabaddiData(kabaddi);
        setVolleyballData(volleyball);
        setLoading(false);

        // Get the last data from local storage
        const lastKabaddiData = JSON.parse(localStorage.getItem('lastKabaddiData'));
        const lastVolleyballData = JSON.parse(localStorage.getItem('lastVolleyballData'));

        // Determine the most recently updated game
        if (JSON.stringify(kabaddi) !== JSON.stringify(lastKabaddiData)) {
          setRecentlyUpdatedGame('kabaddi');
        } else if (JSON.stringify(volleyball) !== JSON.stringify(lastVolleyballData)) {
          setRecentlyUpdatedGame('volleyball');
        }

        // Save the current data to local storage
        localStorage.setItem('lastKabaddiData', JSON.stringify(kabaddi));
        localStorage.setItem('lastVolleyballData', JSON.stringify(volleyball));
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderKabaddi = () => (
    <div>
      <h2>
        {recentlyUpdatedGame === 'kabaddi' && <Spinner animation="grow" variant="info" />}
        KABADDI
      </h2>
      <div className={`box-content winner ${recentlyUpdatedGame === 'kabaddi' ? 'kabaddi-box-glow' : ''}`}>
        <div className='boxx'>
          <div className='box-cont'>
            <h3>Team A</h3>
            <p>NAME: {kabaddiData.teams[0].name}</p>
            <p>SCORE: {kabaddiData.teams[0].score}</p>
            <p>Raider: {kabaddiData.teams[0].selectedPlayer ? kabaddiData.teams[0].selectedPlayer.name : "Unknown"}</p>
          </div>
          <div className='box-cont'>
            <h3>Team B</h3>
            <p>NAME: {kabaddiData.teams[1].name}</p>
            <p>SCORE: {kabaddiData.teams[1].score}</p>
            <p>Raider: {kabaddiData.teams[1].selectedPlayer ? kabaddiData.teams[1].selectedPlayer.name : "Unknown"}</p>
          </div>
        </div>
        <h2>WINNER: {kabaddiData.winner}</h2>
        {kabaddiData.link && (
          <p>
            Live Link:{" "}
            <a href={kabaddiData.link} target="_blank" rel="noopener noreferrer">
              {kabaddiData.link}
            </a>
          </p>
        )}
      </div>
    </div>
  );

  const renderVolleyball = () => (
    <div>
      <h2>
        {recentlyUpdatedGame === 'volleyball' && <Spinner animation="grow" variant="info" />}
        VOLLEYBALL
      </h2>
      <div className={`box-content winner ${recentlyUpdatedGame === 'volleyball' ? 'volleyball-box-glow' : ''}`}>
        <div className='boxx'>
          <div className='box-cont'>
            <h3>Team A</h3>
            <p>NAME: {volleyballData.teams[0].name}</p>
            <p>SCORE: {volleyballData.teams[0].score}</p>
            <p>SET: {volleyballData.teams[0].currentSet}</p>
          </div>
          <div className='box-cont'>
            <h3>Team B</h3>
            <p>NAME: {volleyballData.teams[1].name}</p>
            <p>SCORE: {volleyballData.teams[1].score}</p>
            <p>SET: {volleyballData.teams[1].currentSet}</p>
          </div>
        </div>
        <h2>WINNER: {volleyballData.winner}</h2>
        {volleyballData.link && (
          <p>
            Live Link:{" "}
            <a href={volleyballData.link} target="_blank" rel="noopener noreferrer">
              {volleyballData.link}
            </a>
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className='whole'>
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Live</Breadcrumb.Item>
      </Breadcrumb>

      <h1 className="color-changing-text">...ENJOY YOUR LIVE GAME SHOW...</h1>

      {recentlyUpdatedGame === 'kabaddi' && renderKabaddi()}
      {recentlyUpdatedGame === 'volleyball' && renderVolleyball()}
      {recentlyUpdatedGame !== 'kabaddi' && renderKabaddi()}
      {recentlyUpdatedGame !== 'volleyball' && renderVolleyball()}
    </div>
  );
};

export default Live;
