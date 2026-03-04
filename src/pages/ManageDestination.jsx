import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ManageDestinations() {
  const destinations = [
    { id: 1, name: "Ooty", location: "Tamil Nadu" },
    { id: 2, name: "Goa", location: "Goa" },
    { id: 3, name: "Mysore", location: "Karnataka" }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Manage Destinations</h1>

        <button style={styles.addButton}>+ Add New Destination</button>

        <div style={styles.table}>
          {destinations.map((dest) => (
            <div key={dest.id} style={styles.row}>
              <div>
                <h3>{dest.name}</h3>
                <p>{dest.location}</p>
              </div>

              <div style={styles.actions}>
                <Link
                  to={`/destination/${dest.id}`}
                  style={styles.viewButton}
                >
                  View
                </Link>

                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton}>Delete</button>
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
  addButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  },
  table: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "700px",
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
  viewButton: {
    padding: "6px 12px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px"
  },
  editButton: {
    padding: "6px 12px",
    backgroundColor: "orange",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
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

export default ManageDestinations;