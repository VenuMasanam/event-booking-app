import React from 'react';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div style={styles.home}>
      <Carousel />
      <div id="about" style={styles.aboutSection}>
        <h2 style={styles.aboutHeading}>About Us</h2>
        <p style={styles.aboutText}>
          We are a leading event organization company based in Hyderabad, specializing in premium to small-scale events.
          Our mission is to provide exceptional services, including food and decorations, to make your events memorable.
        </p>
      </div>
    </div>
  );
};

const styles = {
  home: {
    padding: '2rem',
    textAlign: 'center',
  },
  aboutSection: {
    padding: '4rem 2rem',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  aboutHeading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  aboutText: {
    fontSize: '1.2rem',
    color: '#666',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

export default Home;