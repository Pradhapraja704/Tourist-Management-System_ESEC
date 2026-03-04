import { Link } from "react-router-dom";

function PackageCard({ id, title, price, duration, description }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p>{description}</p>

      <Link to="/booking" style={styles.button}>
        Book Now
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  button: {
    marginTop: "10px",
    padding: "10px",
    textAlign: "center",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default PackageCard;