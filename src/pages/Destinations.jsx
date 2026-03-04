import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import ooty from "../assets/ooty.webp"
import goa from "../assets/goa.jpg"
import myso from "../assets/mys.jpg"

function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Ooty",
      location: "Tamil Nadu",
      image: ooty,
      description: "Beautiful hill station with scenic views and cool climate."
    },
    {
      id: 2,
      name: "Goa",
      location: "Goa",
      image: goa,
      description: "Famous for beaches, nightlife, and water sports."
    },
    {
      id: 3,
      name: "Mysore",
      location: "Karnataka",
      image: myso,
      description: "Known for Mysore Palace and rich cultural heritage."
    }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Explore Destinations</h1>

        <div style={styles.grid}>
          {destinations.map((place) => (
            <DestinationCard
              key={place.id}
              id={place.id}
              name={place.name}
              location={place.location}
              image={place.image}
              description={place.description}
            />
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
  grid: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap"
  }
};

export default Destinations;