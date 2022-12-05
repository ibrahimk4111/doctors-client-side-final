import * as React from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";

//react firebase hook
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";

function Header() {
  const [user] = useAuthState(auth);

  const signoutHandler = async () => {
    await signOut(auth);
  };

  const menuItems = <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/services">Services</Link>
    </li>
    <li>
      <Link to="/appointment">Appointment</Link>
    </li>
    <li>
      <Link to="/reviews">Reviews</Link>
    </li>
    {/* <li>
      <Link to="about">About</Link>
    </li> */}
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          {user && <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>}
          {user ?
            <li><Link to="/login" onClick={signoutHandler}>Sign Out</Link></li>
            :
            <li><Link to="/login">Sign In</Link></li>}
          </ul>

        </div>
        <Link className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          {user && <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>}
          {user ?
            <li><Link to="/login" onClick={signoutHandler}>Sign Out</Link></li>
            :
            <li><Link to="/login">Sign In</Link></li>}
        </ul>
      </div>

      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <label
            htmlFor="my-drawer-2"
            class="drawer-button lg:hidden"
          >
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
          </label>
        </label>
      </div>

    </div>
  );
}

export default Header;
