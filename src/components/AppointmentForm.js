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
          <option>Dr. Sarah Patel, Cardiology</option>
          <option>Dr. Rajesh Kumar, Neurology</option>
          <option>Dr. Anjali Mehta, Dermatology</option>
          <option>Dr. Priya Nair, Pediatrics</option>
          <option>Dr. Arun Verma, Orthopedics</option>
          <option>Dr. Maya Singh, Obstetrics and Gynecology</option>
          <option>Dr. Vikram Reddy, General Surgery</option>
          <option>Dr. Neha Desai, Internal Medicine</option>
          <option>Dr. Aakash Bansal, Psychiatry</option>
          <option>Dr. Kavya Iyer, Endocrinology</option>
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
