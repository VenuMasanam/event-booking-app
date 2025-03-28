import React from 'react';

const Carousel = () => {
  return (
    <div style={styles.carousel}>
      <div style={styles.carouselSlide}>
        <img
          src="/assets/charvik.webp" // Correct path
          
          alt="Event 1"
          style={styles.carouselImage}
        />
        <button style={styles.bookSlotButton}>Book Slot</button>
      </div>
    </div>
  );
};

const styles = {
  carousel: {
    position: 'relative',
    height: '400px',
    overflow: 'hidden',
  },
  carouselSlide: {
    position: 'relative',
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  bookSlotButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Carousel;