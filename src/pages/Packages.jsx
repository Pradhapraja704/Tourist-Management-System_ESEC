import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";

function Packages() {
  const packages = [
    {
      id: 1,
      title: "Ooty Weekend Package",
      duration: "2 Days / 1 Night",
      price: 4999,
      description: "Enjoy a relaxing weekend in Ooty with sightseeing and hotel stay."
    },
    {
      id: 2,
      title: "Goa Beach Package",
      duration: "3 Days / 2 Nights",
      price: 8999,
      description: "Experience Goa beaches, nightlife, and water sports activities."
    },
    {
      id: 3,
      title: "Mysore Heritage Package",
      duration: "2 Days / 1 Night",
      price: 5999,
      description: "Explore Mysore Palace and historical landmarks with guided tours."
    }
  ];

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Travel Packages</h1>

        <div style={styles.grid}>
          {packages.map((pack) => (
            <PackageCard
              key={pack.id}
              id={pack.id}
              title={pack.title}
              duration={pack.duration}
              price={pack.price}
              description={pack.description}
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

export default Packages;