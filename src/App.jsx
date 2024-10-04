import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import EmergencyForum from './pages/EmergencyForum';
import Lokasi from './pages/Lokasi';


function App() {
  const isLoggedIn = localStorage.getItem("LoggedIn") === "true";
  const userId = localStorage.getItem("userId")
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home userId={userId} />} />
      <Route path="/emergencyforum" element={<EmergencyForum/>} />
      <Route path="/lokasi" element={<Lokasi />} />
    </Routes>
  );
}

export default App;
