import React from "react";
import "./Form.css";

function DoctorForm() {
  return (
    <div className="form-container">
      <h2>Doctor Registration Form</h2>
      <form>
        

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

        <label>Employee ID:</label>
        <input type="text" placeholder="Enter Employee ID" />

        <label>Specialization:</label>
        <select>
  <option value="Cardiology">Cardiology</option>
  <option value="Neurology">Neurology</option>
  <option value="Dermatology">Dermatology</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Orthopedics">Orthopedics</option>
  <option value="Obstetrics and Gynecology">Obstetrics and Gynecology</option>
  <option value="General Surgery">General Surgery</option>
  <option value="Internal Medicine">Internal Medicine</option>
  <option value="Psychiatry">Psychiatry</option>
  <option value="Endocrinology">Endocrinology</option>
</select>

        

        <button type="submit" className="submit-btn">Check Appointments</button>
      </form>
    </div>
  );
}

export default DoctorForm;
