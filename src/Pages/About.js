import React from "react";

const AboutUsPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.description}>
          At our organisation, we believe in making a difference in the lives of
          homeless people across the nation. Our mission is to provide support
          and assistance to those in need, by connecting them with the nearest
          NGOs and temporary shelters.
        </p>
        <p style={styles.description}>
          We work closely with individuals and communities to identify homeless
          individuals and families, and then coordinate with local NGOs to
          provide them with proper healthcare, education, and other essential
          facilities.
        </p>
        <p style={styles.description}>
          Together, we can make a positive impact and help create a better
          future for everyone.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#002244", // Dark blue background
    fontFamily: "Monospace, sans-serif", // Applying Roboto font
  },
  content: {
    maxWidth: "800px",
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#FFD700", // Gold color
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#fff", // White color
  },
};

export default AboutUsPage;
