import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext); 

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error))
  };

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Auth Vaiya
        </Link>
         
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        {user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">
          Profile
        </Link>}
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        { user ? (
          <div>
            <span className="text-info mr-2">{user?.displayName}</span>{" "}
            <span>{user?.email}</span>{" "}
            <button onClick={handleLogout} className="btn btn-xs ml-2">
              sign out
            </button>{" "}
          </div>
        ) : (
          "")}
      </div>
    </>
  );
};

export default Header;
