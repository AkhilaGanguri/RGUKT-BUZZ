import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import Games from './Games';
import Schedule from './Schedule';
import AdminUser from './AdminUser';

function Admin() {
    const location = useLocation();
    const { email } = location.state || {};

    if (!email) {
        return <div>Email not provided</div>;
    }

    console.log('Admin email:', email);  // Debugging line

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AdminUser email={email} />
            <div style={{ marginTop: '20px' }}>
                <Link to="/games" state={{ email }}>
                    <button style={buttonStyle}>LIVE</button>
                </Link>
                <Link to="/scheduleadmin" state={{ email }}>
                    <button style={{ ...buttonStyle, marginBottom: '50px' }}>SCHEDULE</button>
                </Link>
            </div>
            <Routes>
                <Route path="/games" element={<Games />} />
                <Route path="/adminschedule" element={<Schedule />} />
            </Routes>
        </div>
    );
}

const buttonStyle = {
    margin: '30px',
    height: '100px',
    borderRadius: '5px',
    border: '2px solid blue',
    color: 'blue',
    backgroundColor: 'skyblue',
    padding: '10px 20px',
    fontWeight: 'bold',
    fontSize: '26px',
    cursor: 'pointer',
};

export default Admin;
