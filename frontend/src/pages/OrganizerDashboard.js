// frontend/src/pages/OrganizerDashboard.js
import React, { useState } from 'react';

const OrganizerDashboard = () => {
  const [eventData, setEventData] = useState({
    eventType: '',
    description: '',
    images: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData({
      ...eventData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('eventType', eventData.eventType);
    formData.append('description', eventData.description);
    formData.append('images', eventData.images);

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        // Redirect to customer dashboard upon successful save
        window.location.href = '/customer-dashboard';
      } else {
        console.error('Event creation failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.heading}>Welcome to Organizer Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Event Type:</label>
          <input
            type="text"
            name="eventType"
            value={eventData.eventType}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Images:</label>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Create Event</button>
      </form>
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
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default OrganizerDashboard;