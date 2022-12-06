import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import Services from "./Components/ServiceCom/Services";
import AppointmentHome from "./Components/Appointment/AppointmentHome";
import Reviews from "./Components/Review/Reviews";
import Register from "./Components/LogIn/Register";

//react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Components/LogIn/LogIn";
import PrivateRoute from "./Components/LogIn/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyAppointments from "./Components/Dashboard/MyAppointments";
import MyReview from "./Components/Dashboard/MyReview";
import DashboardHome from "./Components/Dashboard/DashboardHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/doctors-client-side-final" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <AppointmentHome />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="MyAppointment" element={<MyAppointments />} />
            <Route path="myReview" element={<MyReview />} />
          </Route>

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
