import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const ServiceAdd = () => {
  const { id } = useParams();
  const location = useLocation();
  const [blogData, setBlogData] = useState(location.state ? location.state.blogData : { title: "", date: "", description: "", image: "" });

  useEffect(() => {
    if (location.state && location.state.blogData) {
      setBlogData(location.state.blogData);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog data submitted:", blogData);
    setBlogData({ title: "", date: "", description: "", image: "" });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add Services</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="title" style={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Add</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ServiceAdd;
