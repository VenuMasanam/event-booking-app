import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/events/${id}`)
      .then(response => setEvent(response.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div style={styles.eventDetails}>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Location: {event.location}</p>
      <p>Price: ${event.price}</p>
    </div>
  );
};

const styles = {
  eventDetails: {
    padding: '4rem 2rem',
    textAlign: 'center',
  },
};

export default EventDetails;