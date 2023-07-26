import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(logOut)

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(error => console.error(error))
  };

  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Vaiya</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
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
        {user ? (
          <div>
            <span>{user.email}</span>{" "}
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
