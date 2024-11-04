import React from "react";
import "./Form.css";

function DoctorForm() {
  return (
    <div className="form-container">
      <h2>Doctor Registration Form</h2>
      <form>
        <label>First Name:</label>
        <input type="text" placeholder="Enter First Name" />

        <label>Last Name:</label>
        <input type="text" placeholder="Enter Last Name" />

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

        <label>Phone:</label>
        <input type="text" placeholder="Enter Phone Number" />

        <button type="submit" className="submit-btn">Register Doctor</button>
      </form>
    </div>
  );
}

export default DoctorForm;
