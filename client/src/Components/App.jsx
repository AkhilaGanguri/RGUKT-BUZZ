// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MatchProvider } from './Admin/MatchContext';

function App() {
  const [email, setEmail] = useState('');
  const matches = [
    { date: '2023-07-20', time: '10:00 AM', game: 'Football', teams: 'Team A vs Team B', result: 'Pending' },
    // Add more matches as needed
  ];

  return (
    <MatchProvider value={{ matches }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login setEmail={setEmail} />} />
          <Route path="/home" element={<Home email={email} />} />
          <Route path="/schedule" element={<Schedule email={email} />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </MatchProvider>
  );
}

export default App;
