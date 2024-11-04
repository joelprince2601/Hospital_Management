import React from "react";
import "./Form.css";

function BillingForm() {
  return (
    <div className="form-container">
      <h2>Billing Form</h2>
      <form>
        <label>Patient Name:</label>
        <input type="text" placeholder="Enter Patient Name" />

        <label>Service Provided:</label>
        <select>
          <option>Doctor Visit</option>
          <option>Meds</option>
          <option>Doctor+Meds</option>
        </select>


        <label>Amount:</label>
        <input type="text" placeholder="Enter Amount" />

        <label>Payment Method:</label>
        <select>
          <option>Cash</option>
          <option>Credit Card</option>
          <option>Insurance</option>
        </select>

        <button type="submit" className="submit-btn">Generate Bill</button>
      </form>
    </div>
  );
}

export default BillingForm;
