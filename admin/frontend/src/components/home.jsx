import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Upload,
  Users,
  LogOut,
  Music2,
  Search,
} from "lucide-react";

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-900 p-5 flex flex-col justify-between h-full fixed">
        <div>
          <h1 className="text-2xl font-bold mb-5">AdminPanel</h1>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-400">
              <HomeIcon size={20} /> <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-400">
              <Upload size={20} /> <span>Upload Music</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-400">
              <Music2 size={20} /> <span>Manage Songs</span>
            </li>
            <li className="flex items-center space-x-3 cursor-pointer hover:text-gray-400">
              <Users size={20} /> <span>Users</span>
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 bg-red-600 px-4 py-2 rounded-md hover:bg-red-700"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-60 p-8 overflow-auto">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 p-3 rounded-lg mb-6">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search songs or users..."
            className="bg-transparent outline-none text-white ml-3 flex-1"
          />
        </div>

        <h1 className="text-4xl font-bold">Welcome Admin</h1>
        <p className="text-lg mt-2 text-gray-400">
          Manage music content and user activity on MusicHub.
        </p>

        {/* Admin Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition text-center">
            <span className="text-4xl">⬆️</span>
            <h2 className="text-xl font-semibold mt-2">Upload Music</h2>
            <p className="text-gray-400">Add new tracks to the database.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition text-center">
            <span className="text-4xl">🎼</span>
            <h2 className="text-xl font-semibold mt-2">Manage Songs</h2>
            <p className="text-gray-400">Edit or remove existing tracks.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition text-center">
            <span className="text-4xl">👥</span>
            <h2 className="text-xl font-semibold mt-2">User Management</h2>
            <p className="text-gray-400">View and control user access.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
