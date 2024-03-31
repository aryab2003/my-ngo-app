import React, { useState } from "react";
import axios from "axios";

const PhotoUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [remarks, setRemarks] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("name", name);
    formData.append("location", location);
    formData.append("remarks", remarks);

    axios
      .post("http://localhost:3000/photographer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Upload successful:", response);
        // You can handle success behavior here, like showing a success message or updating state
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
        // You can handle error behavior here, like showing an error message
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url(https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, // Set background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Set minimum height to cover the whole viewport
        padding: "20px",
        boxSizing: "border-box",
        width: "100vw", // Set width to cover entire viewport
        justifyContent: "center", // Center children vertically
      }}
    >
      <input
        type="file"
        onChange={handleFileChange}
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          width: "40%",
        }}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          width: "70%",
        }}
      />
      <textarea
        placeholder="Remarks"
        value={remarks}
        onChange={(e) => setRemarks(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          width: "80%",
          resize: "none",
        }}
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: uploading ? "not-allowed" : "pointer",
          opacity: uploading ? "0.7" : "1",
        }}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default PhotoUploader;
