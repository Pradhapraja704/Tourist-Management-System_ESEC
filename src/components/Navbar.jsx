import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>TraVerse</h2>

      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/destinations" style={styles.link}>Destinations</Link></li>
        <li><Link to="/packages" style={styles.link}>Packages</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#1e3a8a",
    color: "white"
  },
  logo: {
    margin: 0
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  }
};

export default Navbar;