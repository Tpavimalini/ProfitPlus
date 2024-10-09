import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="button-group">
        <button className="dashboard-button" onClick={() => navigate('/customers')}>
          Customer
        </button>
        <button className="dashboard-button" onClick={() => navigate('/suppliers')}>
          Supplier
        </button>
        <button className="dashboard-button" onClick={() => navigate('/staff')}>
          Staff
        </button>
      </div>
    </div>
  );
};

export default Dashboard;