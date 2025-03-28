import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/events')
      .then(response => setEvents(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={styles.events}>
      <h2 style={styles.eventsHeading}>Events</h2>
      <div style={styles.eventList}>
        {events.map(event => (
          <div key={event._id} style={styles.eventCard}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
            <p>Price: ${event.price}</p>
            <Link to={`/events/${event._id}`} style={styles.eventLink}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  events: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  eventsHeading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    color: '#333',
  },
  eventList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  eventCard: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  eventLink: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#ff6b6b',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Events;