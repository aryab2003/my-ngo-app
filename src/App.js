import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    async function fetchShelters() {
      try {
        const response = await axios.get("http://localhost:3000/ngo");
        setShelters(response.data);
      } catch (error) {
        console.error("Error fetching shelters:", error);
      }
    }

    fetchShelters();
  }, []);

  return (
    <div>
      <h1>NGO App</h1>
      <h2>Shelters:</h2>
      <ul>
        {shelters.map((shelter) => (
          <li key={shelter.shelter_id}>{shelter.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
