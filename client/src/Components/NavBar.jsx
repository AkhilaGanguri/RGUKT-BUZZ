import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css';
import { NavLink } from 'react-router-dom'; // Import NavLink component from React Router
import Logo from './Assets/logo.png';

function NavBar() {
    return (
        <nav id="nav" className="navbar">
            <div className="navbar-logo-container">
                <img src={Logo} alt="logo" className="navbar-logo" />
                <div className="navbar-brand">
                    <span className="multi-color-text">RGUKT BUZZ</span>
                </div>
            </div>
            <div className="navbar-links">
                <ul className="navbar-list">
                    <li className="navbar-item"><NavLink to="/home" activeClassName="active"><i className="fas fa-home"></i> Home</NavLink></li>
                    <li className="navbar-item"><NavLink to="/live" activeClassName="active" className='nav-special'><i className="fas fa-broadcast-tower"></i> LIVE</NavLink></li>
                    <li className="navbar-item"><NavLink to="/schedule" activeClassName="active" className='nav-special'><i className="fas fa-calendar-alt"></i> SCHEDULE</NavLink></li>
                    <li className="navbar-item"><NavLink to="/past" activeClassName="active" className='nav-special'><i className="fas fa-history"></i> PAST</NavLink></li>
                    <li className="navbar-item"><NavLink to="/achievements" activeClassName="active" className='nav-special'><i className="fas fa-trophy"></i> ACHIEVEMENTS</NavLink></li>
                    <li className="navbar-item"><NavLink to="/help" activeClassName="active"><i className="fas fa-question-circle"></i> Help</NavLink></li>
                    <li className="navbar-item"><NavLink to="/first" activeClassName="active"><i className="fas fa-sign-out-alt"></i> Logout</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
