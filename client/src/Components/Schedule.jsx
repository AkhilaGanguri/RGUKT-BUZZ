// Schedule.jsx
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './Schedule.css';
import { MatchContext } from './Admin/MatchContext.jsx';

const Schedule = ({ email }) => {
  const { matches } = useContext(MatchContext);

  return (
    <div>
      {email && (
        <div className="email-display">
          <div className="email-circle" title={email}>
            {email.charAt(0)}
          </div>
        </div>
      )}
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Schedule</Breadcrumb.Item>
      </Breadcrumb>
      <div className="schedule">
        <h1>RGUKT-Ongole</h1>
        <h2>Match Schedule</h2>
        {matches.map((match, index) => (
          <div key={index} className="match">
            <span>{match.date} | {match.time} <strong>{match.game}</strong></span><br />
            <strong>{match.teams}</strong><br />
            <span>{match.result}</span><br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
