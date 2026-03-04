import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>Create Account</h1>

        <form style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
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
  },
  text: {
    marginTop: "20px"
  },
  link: {
    color: "#1e3a8a",
    textDecoration: "none",
    fontWeight: "500"
  }
};

export default Register;