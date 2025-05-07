import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import '../Schedule.css';
import { MatchContext } from './MatchContext.jsx';
import AdminUser from './AdminUser';

const Schedule = () => {
  const { matches, email } = useContext(MatchContext);

  const matchBoxStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#000',
    border: '1px solid #ccc',
    padding: '5px 10px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginLeft: '0px',
  };
  const buttonsty = {
    backgroundColor: 'white',
    color: '#000',
    border: '1px solid #ccc',
    padding: '5px 10px',
    textDecoration: 'none',
    borderRadius: '4px',
    marginLeft: '400px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#f8f9fa',
  };

  const matchDetailsStyle = {
    flex: 1,
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft:'450px',
  };
  const head = {
    marginLeft:'-50px',
    color:'white',
  };

  return (
    <div className="body">
      <AdminUser email={email} />
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Schedule</Breadcrumb.Item>
      </Breadcrumb>
      <div className="schedule">
        <div style={headerStyle}>
          <h1>RGUKT-Ongole</h1>
          <Link
            to="/NewMatch"
            className="link-button new-match-button"
            style={buttonsty}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
          >
            New Match
          </Link>
        </div>
        <h2 style={head}>Match Schedule</h2>
        {matches.map((match, index) => (
          <div key={index} style={matchBoxStyle}>
            <div style={matchDetailsStyle}>
              <span>{match.date} | {match.time} <strong>{match.game}</strong></span><br />
              <strong>{match.teams}</strong><br />
              <span>{match.result}</span>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <Link
                to="/UpdateMatch"
                className="update-match-button"
                style={buttonStyle}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Update Match
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
