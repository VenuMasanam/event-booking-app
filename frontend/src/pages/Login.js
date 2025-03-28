// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        const user = JSON.parse(atob(data.token.split('.')[1]));
        if (user.userType === 'Customer') {
          navigate('/customer-dashboard');
        } else if (user.userType === 'Organizer') {
          navigate('/organizer-dashboard');
        } else if (user.userType === 'Admin') {
          navigate('/admin-dashboard');
        }
      } else {
        console.error('Login failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={{ ...styles.formGroup, position: 'relative' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <span
            style={styles.eyeIcon}
            onClick={() => {
              const input = document.querySelector('input[type="password"]');
              input.type = input.type === 'password' ? 'text' : 'password';
            }}
          >
            👁️
          </span>
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      <p style={styles.textCenter}>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  textCenter: {
    textAlign: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: '10px',
    top: '35px',
    cursor: 'pointer',
  },
};

export default Login;