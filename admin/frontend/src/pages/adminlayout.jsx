// src/pages/AdminLayout.jsx
import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold p-4">AdminPanel</h2>
          <div className="space-y-2 px-4">
            <button
              onClick={() => navigate('/home')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate('/uploadmusic')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Upload Music
            </button>
            <button
              onClick={() => navigate('/managemusic')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Manage Songs
            </button>
            <button
              onClick={() => navigate('/manageusers')}
              className="w-full text-left hover:bg-gray-700 p-2 rounded"
            >
              Users
            </button>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 p-3 m-4 rounded text-white"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
