import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      
      <div className="space-y-4 w-full max-w-md">
        <button
          onClick={() => navigate('/uploadmusic')}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg"
        >
          Upload Music
        </button>

        <button
          onClick={() => navigate('/managemusic')}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-lg"
        >
          Manage Songs
        </button>

        <button
          onClick={() => navigate('/manageusers')}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-lg"
        >
          Manage Users
        </button>
      </div>
    </div>
  );
};

export default AdminHome;
