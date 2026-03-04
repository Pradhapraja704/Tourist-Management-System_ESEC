import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserDashboard() {
  const bookings = [
    {
      id: 1,
      destination: "Ooty Weekend Package",
      date: "2026-04-10",
      status: "Confirmed"
    },
    {
      id: 2,
      destination: "Goa Beach Package",
      date: "2026-05-15",
      status: "Pending"
    }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>User Dashboard</h1>

        <div style={styles.topSection}>
          <Link to="/profile" style={styles.button}>
            View Profile
          </Link>

          <Link to="/destinations" style={styles.buttonOutline}>
            Explore More Trips
          </Link>
        </div>

        <h2 style={{ marginTop: "40px" }}>My Bookings</h2>

        <div style={styles.bookings}>
          {bookings.map((booking) => (
            <div key={booking.id} style={styles.card}>
              <h3>{booking.destination}</h3>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Status:</strong> {booking.status}</p>

              <Link to="/booking" style={styles.smallButton}>
                Book Again
              </Link>
            </div>
          ))}
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
  topSection: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  bookings: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    width: "300px"
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
  smallButton: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 15px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "14px"
  }
};

export default UserDashboard;