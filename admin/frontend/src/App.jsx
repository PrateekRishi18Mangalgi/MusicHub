// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';

import AdminLayout from './pages/adminlayout';
import AdminHome from './pages/adminhome';
import UploadMusic from './pages/uploadmusic';
import ManageSongs from './pages/managemusic';
import ManageUsers from './pages/manageusers';

const App = () => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} /> */}

        {/* Admin routes */}
        <Route element={<AdminLayout />}>
          <Route path="/home" element={isAuthenticated ? <AdminHome /> : <Navigate to="/login" />} />
          <Route path="uploadmusic" element={<UploadMusic />} />
          <Route path="managemusic" element={<ManageSongs />} />
          <Route path="manageusers" element={<ManageUsers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
