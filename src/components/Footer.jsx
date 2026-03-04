function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3>Smart Tourist Management System</h3>
        <p>Explore the world with ease and smart planning.</p>

        <div style={styles.links}>
          <p>Email: pradhapraja0@gmail.com</p>
          <p>Phone: +91 7904880957</p>
          <p>Location: India</p>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Smart Tourist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


const styles = {
  footer: {
    backgroundColor: "#1e3a8a",
    color: "white",
    padding: "30px 20px",
    marginTop: "40px",
    textAlign: "center"
  },
  container: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  links: {
    marginTop: "15px",
    lineHeight: "1.8"
  },
  copy: {
    marginTop: "20px",
    fontSize: "14px",
    opacity: 0.8
  }
};

export default Footer;