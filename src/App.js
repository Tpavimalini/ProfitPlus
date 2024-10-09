import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import CustomerManagement from './components/CustomerManagement';
import SupplierManagement from './components/SupplierManagement';
import StaffManagement from './components/StaffManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<CustomerManagement />} />
        <Route path="/suppliers" element={<SupplierManagement />} />
        <Route path="/staff" element={<StaffManagement />} />
      </Routes>
    </Router>
  );
}

export default App;