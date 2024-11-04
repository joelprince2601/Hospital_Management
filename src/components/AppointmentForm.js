// AppointmentForm.js
import React from "react";
import "./Form.css";
import DoctorCarousel from "./DoctorCarousel"; // Import the carousel component

function AppointmentForm() {
  return (
    <div className="form-container">
      <h2>Appointment Scheduling Form</h2>
      <form>
        <label>Patient Name:</label>
        <input type="text" placeholder="Enter Patient Name" />

        <label>Doctor Name:</label>
        <select>
          <option>Dr. Sarah Patel</option>
          <option>Dr. Rajesh Kumar</option>
          <option>Dr. Anjali Mehta</option>
          <option>Dr. Priya Nair</option>
          <option>Dr. Arun Verma</option>
          <option>Dr. Maya Singh</option>
          <option>Dr. Vikram Reddy</option>
          <option>Dr. Neha Desai</option>
          <option>Dr. Aakash Bansal</option>
          <option>Dr. Kavya Iyer</option>
        </select>

        <label>Date:</label>
        <input type="date" />

        <label>Time:</label>
        <input type="time" />

        <button type="submit" className="submit-btn">Schedule Appointment</button>
      </form>
      <DoctorCarousel /> {/* Add the carousel here */}
    </div>
  );
}

export default AppointmentForm;
