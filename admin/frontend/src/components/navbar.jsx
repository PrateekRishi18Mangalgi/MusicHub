import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🎵 Admin Dashboard
        </Link>
      </div>
      <div className="flex-none gap-4">
        <Link to="/add-music" className="btn btn-sm btn-outline">
          Add Music
        </Link>
        <Link to="/manage-music" className="btn btn-sm btn-outline">
          Manage Music
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
