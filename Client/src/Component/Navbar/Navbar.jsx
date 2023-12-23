import { Link } from "react-router-dom";
import logo from "../../assets/Arc.png";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout().then(() => {
      toast("Logged out Successfully!", {
        icon: "❎",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
    });
  };

  const renderUserDetails = () => {
    if (user) {
      return (
        <div className="flex items-center space-x-2">
          <img
            src={user.photoURL}
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span>{user.displayName}</span>
        </div>
      );
    }
    return null;
  };

  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        {user ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <Link to="/login">Dashboard</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div className="w-1/5 h-auto">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">{renderUserDetails()}</div>
        {user ? (
          <button onClick={handleLogout} className="btn btn-outline">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
