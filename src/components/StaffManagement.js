import React, { useState } from 'react';
import './StaffManagement.css'; // Import the CSS file

const StaffManagement = () => {
  const [formData, setFormData] = useState({
    billNumber: '',
    shopName: '',
    balance: '',
    amount: '',
    settled: false,
    order: '',
    remark: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for saving the form data (e.g., API call, local storage, etc.)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="staff-management-container">
      <h2>Staff Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bill Number:</label>
          <input
            type="text"
            name="billNumber"
            value={formData.billNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Shop Name:</label>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Balance:</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Add Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Settled:</label>
          <input
            type="checkbox"
            name="settled"
            checked={formData.settled}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Order:</label>
          <input
            type="text"
            name="order"
            value={formData.order}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Remark:</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default StaffManagement;
