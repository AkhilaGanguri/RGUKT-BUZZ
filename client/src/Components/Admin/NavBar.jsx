import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './NavBar.css';
import { Link } from 'react-router-dom';
import Logo from './logo.jpeg';

function NavBar() {
    return (
        <div id="nav">
            <img src={Logo} alt="logo" />
            <div id="first">
                <ul>
                    <li><Link to="/live" className='nav-special'><i className="fas fa-broadcast-tower"></i> LIVE</Link></li>
                    <li><Link to="/past" className='nav-special'><i className="fas fa-history"></i> PAST</Link></li>
                    <li><Link to="/schedule" className='nav-special'><i className="fas fa-calendar-alt"></i> SCHEDULE</Link></li>
                </ul>
            </div>
            <div id='second'>
                <ul>
                    <li><Link to="/home"><i className="fas fa-home"></i> Home</Link></li>
                    <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                    <li><Link to="/help"><i className="fas fa-question-circle"></i> Help</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
