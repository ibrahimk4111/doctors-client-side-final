import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center">
          <h2 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            marginBottom: "10px",
            
          }}
          >DASHBOARD</h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">Dashboard Home</Link>
            </li>
            <li>
              <Link to="/dashboard/MyAppointment">My Appointment</Link>
            </li>
            <li>
              <Link to="/dashboard/myReview">My Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
