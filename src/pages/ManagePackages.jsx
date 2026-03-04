import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ManagePackages() {
  const packages = [
    { id: 1, title: "Ooty Weekend Package", price: 4999 },
    { id: 2, title: "Goa Beach Package", price: 8999 },
    { id: 3, title: "Mysore Heritage Package", price: 5999 }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Manage Packages</h1>

        <button style={styles.addButton}>+ Add New Package</button>

        <div style={styles.table}>
          {packages.map((pack) => (
            <div key={pack.id} style={styles.row}>
              <div>
                <h3>{pack.title}</h3>
                <p><strong>Price:</strong> ₹{pack.price}</p>
              </div>

              <div style={styles.actions}>
                <Link to="/booking" style={styles.viewButton}>
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

export default ManagePackages;