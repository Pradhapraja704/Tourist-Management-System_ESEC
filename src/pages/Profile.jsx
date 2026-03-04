import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210"
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>My Profile</h1>

        <div style={styles.card}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>

        <div style={styles.buttons}>
          <Link to="/user-dashboard" style={styles.button}>
            Back to Dashboard
          </Link>

          <Link to="/booking" style={styles.buttonOutline}>
            Book New Trip
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
  card: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttons: {
    marginTop: "30px",
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
  }
};

export default Profile;