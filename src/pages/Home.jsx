import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div style={styles.hero}>
        <h1>Welcome to Smart Tourist Management System</h1>
        <p>Discover amazing destinations and book your trips easily.</p>

        <div style={styles.buttons}>
          <Link to="/destinations" style={styles.button}>
            Explore Destinations
          </Link>

          <Link to="/packages" style={styles.buttonOutline}>
            View Packages
          </Link>
        </div>
      </div>

      <div style={styles.section}>
        <h2>Why Choose Us?</h2>
        <p>Easy booking process</p>
        <p>Affordable packages</p>
        <p>Trusted travel partners</p>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#f5f5f5"
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  },
  buttonOutline: {
    padding: "10px 20px",
    border: "2px solid #1e3a8a",
    color: "#1e3a8a",
    textDecoration: "none",
    borderRadius: "5px"
  },
  section: {
    textAlign: "center",
    padding: "40px 20px"
  }
};

export default Home;