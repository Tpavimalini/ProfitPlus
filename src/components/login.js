import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === '' || password === '') {
      setError('Username and password are required');
    } else {
      setError('');
      console.log('Logging in...');
      navigate('/dashboard'); // Navigate to dashboard after successful login
    }
  };

  return (
    <div className="container">
      <div className="welcome-section">
      <center>
          <h1>PocketSense</h1>
          </center>
      </div>
      <div className="card">
        <div className="header">
         
        </div>
        <p>Good to see you again! Enter your correct Username and Password.</p>
        <input
          type="text"
          placeholder="User name"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgot">Forgot Password?</a>
        </div>
        <button className="button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;