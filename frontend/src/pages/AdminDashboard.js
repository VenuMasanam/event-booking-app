// frontend/src/pages/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.dashboard}>
      <h1 style={styles.heading}>Welcome to Admin Dashboard</h1>
      {/* Add more admin-specific content here */}
    </div>
  );
};

const styles = {
  dashboard: {
    maxWidth: '900px',
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
};

export default AdminDashboard;