import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h1>User Login</h1>

        <form style={styles.form}>
          <input
            type="email"
            placeholder="Enter Email"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
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

export default Login;