import { Link } from "react-router-dom";

function DestinationCard({ id, name, location, image, description }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <h3>{name}</h3>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>

      <Link to={`/destination/${id}`} style={styles.button}>
        View Details
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "6px"
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

export default DestinationCard;