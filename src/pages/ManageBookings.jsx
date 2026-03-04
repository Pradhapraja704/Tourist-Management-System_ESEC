import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ManageBookings() {
  const bookings = [
    {
      id: 1,
      user: "John Doe",
      packageName: "Ooty Weekend Package",
      date: "2026-04-10",
      status: "Pending"
    },
    {
      id: 2,
      user: "Jane Smith",
      packageName: "Goa Beach Package",
      date: "2026-05-15",
      status: "Confirmed"
    }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Manage Bookings</h1>

        <div style={styles.table}>
          {bookings.map((booking) => (
            <div key={booking.id} style={styles.row}>
              <div>
                <h3>{booking.packageName}</h3>
                <p><strong>User:</strong> {booking.user}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>

              <div style={styles.actions}>
                <button style={styles.approveButton}>Approve</button>
                <button style={styles.rejectButton}>Reject</button>
                <Link to="/booking" style={styles.viewButton}>
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link to="/admin" style={styles.backButton}>
          Back to Admin Dashboard
        </Link>
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
  table: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  row: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actions: {
    display: "flex",
    gap: "10px"
  },
  approveButton: {
    padding: "6px 12px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  rejectButton: {
    padding: "6px 12px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  viewButton: {
    padding: "6px 12px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px"
  },
  backButton: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default ManageBookings;