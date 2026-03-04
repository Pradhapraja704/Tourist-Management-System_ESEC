import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Booking() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Book Your Trip</h1>

        <form style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="date" style={styles.input} />
          <input type="number" placeholder="Number of People" style={styles.input} />

          <select style={styles.input}>
            <option>Select Payment Method</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </select>

          <button type="submit" style={styles.button}>
            Confirm Booking
          </button>
        </form>
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
  form: {
    maxWidth: "400px",
    margin: "30px auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#1e3a8a",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Booking;