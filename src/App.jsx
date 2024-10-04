import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login';
import EmergencyForum from './pages/EmergencyForum';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/emergencyforum" element={<EmergencyForum />} />
    </Routes>
  );
}

export default App;
