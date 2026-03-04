import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ooty from "../assets/ooty.webp"
import goa from "../assets/goa.jpg"
import myso from "../assets/mys.jpg"

function DestinationDetails() {
  const { id } = useParams();

  const destinations = [
    {
      id: "1",
      name: "Ooty",
      location: "Tamil Nadu",
      image: ooty,
      description:
        "Ooty is a beautiful hill station known for tea gardens, lakes, and cool climate."
    },
    {
      id: "2",
      name: "Goa",
      location: "Goa",
      image: goa,
      description:
        "Goa is famous for beaches, nightlife, water sports, and Portuguese heritage."
    },
    {
      id: "3",
      name: "Mysore",
      location: "Karnataka",
      image: myso,
      description:
        "Mysore is known for Mysore Palace, Dasara festival, and rich cultural history."
    }
  ];

  const destination = destinations.find((place) => place.id === id);

  if (!destination) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Destination Not Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>{destination.name}</h1>
        <p><strong>Location:</strong> {destination.location}</p>
{/* 
          <video
            src={destination.video}
            controls
            autoPlay
            loop
            muted
            style={styles.video}
            /> */}
        <img
          src={destination.image}
          alt={destination.name}
          style={styles.image}
        />

        <p style={styles.description}>{destination.description}</p>

        <Link to="/booking" style={styles.button}>
          Book Now
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
  image: {
    width: "80%",
    maxWidth: "800px",
    marginTop: "20px",
    borderRadius: "8px"
  },
  description: {
    marginTop: "20px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    display: "inline-block",
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#1e3a8a",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px"
  }
};

export default DestinationDetails;