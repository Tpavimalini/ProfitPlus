import React from 'react';
import './SupplierManagement.css'; // Import CSS for styling

const SupplierManagement = () => {
  return (
    <div className="supplier-management-container">
      <h2 className="supplier-management-heading">Supplier Management</h2>
      <p className="balance-display">Total Balance to be Collected: ₹0.00</p>
      
      <button className="supplier-management-button">Add Staff</button>
      <button className="supplier-management-button">Add Bill</button>
      <button className="supplier-management-button">Add Customer</button>
      <button className="supplier-management-button">Collection and Record History</button>
      <button className="supplier-management-button">View Staff Management</button>
      <button className="supplier-management-button">Display Orders and Queries</button>
    </div>
  );
};

export default SupplierManagement;
