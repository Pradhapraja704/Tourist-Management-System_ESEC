import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Admin Dashboard</h1>

        <div style={styles.stats}>
          <div style={styles.card}>
            <h2>120</h2>
            <p>Total Users</p>
          </div>

          <div style={styles.card}>
            <h2>75</h2>
            <p>Total Bookings</p>
          </div>

          <div style={styles.card}>
            <h2>₹3,50,000</h2>
            <p>Total Revenue</p>
          </div>
        </div>

        <div style={styles.management}>
          <Link to="/admin/destinations" style={styles.button}>
            Manage Destinations
          </Link>

          <Link to="/admin/packages" style={styles.button}>
            Manage Packages
          </Link>

          <Link to="/admin/bookings" style={styles.button}>
            Manage Bookings
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    textAlign: "center"
  },
  stats: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },
  card: {
    border: "1px solid #ddd",
    padding: "30px",
    borderRadius: "8px",
    width: "200px"
  },
  management: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default AdminDashboard;