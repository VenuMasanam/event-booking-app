import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarLogo}>Eventify</div>
      <ul style={styles.navbarLinks}>
        <li><Link to="/" style={styles.navbarLink}>Home</Link></li>
        <li><Link to="/about" style={styles.navbarLink}>About Us</Link></li>
        <li><Link to="/events" style={styles.navbarLink}>Events</Link></li>
        <li><Link to="/contact" style={styles.navbarLink}>Contact Us</Link></li>
        <li><Link to="/login" style={styles.navbarLink}>Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navbarLogo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navbarLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
  },
  navbarLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;