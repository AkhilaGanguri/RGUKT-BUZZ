import { Link } from 'react-router-dom';
import React from 'react';
import './First.css'; // Import your CSS file

function First() {
  return (
    <div className="bg_container">
    <h2 className='h2'>...RGUKT BUZZ...</h2>
      <div className="image_description">
        <p className='_para'>
          Experience real-time updates on all campus sports events with RGUKT BUZZ.
        </p>
      </div>
      <div className="login_buttons">
        <Link to="/login"> {/* Add a class name for styling */}
          <button className="homebutton">
            Login as User
          </button>
        </Link>
        <Link to="/adminlogin"> {/* Add a class name for styling */}
          <button className="homebutton">
            Login as Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default First;