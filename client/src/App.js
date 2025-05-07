// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Components/App.css';
import NavBar from './Components/NavBar';
import Live from './Components/Live';
import Past from './Components/Past';
import Schedule from './Components/Schedule';
import Achievements from './Components/Achievements.jsx';
import Home from './Components/Home';
import AdminLive from './Components/Admin/Live.jsx';
import Volleyball from './Components/Admin/Volleyball.jsx';
import Admin from './Components/Admin/Admin.jsx';
import Games from './Components/Admin/Games.jsx';
import ScheduleAdmin from './Components/Admin/Schedule.jsx';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import AdminLogin from './Components/AdminLogin.jsx';
import Signup from './Components/Signup';
import First from './Components/First.jsx';
import Adminschedule from './Components/Admin/Schedule.jsx';
import UpdateMatch from './Components/Admin/UpdateMatchPage.jsx';
import NewMatch from './Components/Admin/NewMatchPage.jsx';
import Help from './Components/Help.jsx';
import { MatchProvider } from './Components/Admin/MatchContext.jsx';

function App() {
  return (
    <MatchProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </MatchProvider>
  );
}

function AppContent() {
  const location = useLocation();

  // Check if the current location is one of the specified pages
  const isRestrictedPage = ['/first', '/signup', '/login','/adminlogin','/forgotpassword','/reset-password/:token'].includes(location.pathname);

  return (
    <div>
      {!isRestrictedPage && <NavBar />}
      <Routes>
        <Route path='/live' element={<Live />} />
        <Route path='/past' element={<Past />} />
        <Route path='/schedule' element={<Schedule />} />\
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/adminschedule' element={<Adminschedule />} />
        <Route path='/updatematch' element={<UpdateMatch />} />
        <Route path='/newmatch' element={<NewMatch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminlive' element={<AdminLive />} />
        <Route path='/volleyball' element={<Volleyball />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/games' element={<Games />} />
        <Route path='/scheduleadmin' element={<ScheduleAdmin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/first' element={<First />} />
        <Route path='/help' element={<Help />} />
        <Route path='*' element={<Navigate to="/first" />} />
      </Routes>
    </div>
  );
}

export default App;
