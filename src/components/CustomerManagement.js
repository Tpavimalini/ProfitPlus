import React from 'react';
import './Customer.css';

const CustomerManagement = () => {
  return (
    <div className="customer-container">
      <h2>Customer Management</h2>
      <div className="customer-info">
        <p>Total Balance: ₹0.00</p>
        <button className="customer-button">Previous Credit Records</button>
        <button className="customer-button">Add Order</button>
        <button className="customer-button">Add Amount of Product</button>
      </div>
    </div>
  );
};

export default CustomerManagement;