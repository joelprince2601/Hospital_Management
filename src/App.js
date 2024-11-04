import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import PatientForm from "./components/PatientForm";
import AppointmentForm from "./components/AppointmentForm";
import DoctorForm from "./components/DoctorForm";
import BillingForm from "./components/BillingForm";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Hospital Management System</h1>
          <p>Manage Patients, Appointments, Doctors, and Billing in one place.</p>
        </header>

        <nav className="nav-bar">
          <Link to="/patients" className="nav-link">Patient Management</Link>
          <Link to="/appointments" className="nav-link">Appointment Scheduling</Link>
          <Link to="/doctors" className="nav-link">Doctor Management</Link>
          <Link to="/billing" className="nav-link">Billing</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/patients" element={<PatientForm />} />
            <Route path="/appointments" element={<AppointmentForm />} />
            <Route path="/doctors" element={<DoctorForm />} />
            <Route path="/billing" element={<BillingForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
