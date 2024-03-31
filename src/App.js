import React, { useEffect, useState } from "react";

import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Donation from "./Pages/Donation";
import Shelter from "./Pages/Shelter";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Interact from "./Pages/Interact";
import About from "./Pages/About";

function App() {
  const [registered, setRegistered] = useState(false);
  // const [login, setLogin] = useState(false);
  useEffect(() => {
    // Your initialization logic here (e.g., fetching shelters)
    // async function fetchShelters() {
    //   try {
    //     const response = await axios.get("http://localhost:3000/ngo");
    //     setShelters(response.data);
    //   } catch (error) {
    //     console.error("Error fetching shelters:", error);
    //   }
    // }
    // fetchShelters();
  }, []); // Empty dependency array to run the effect only once on component mount

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to handle registration
  const handleRegistration = () => {
    // Perform registration logic here (e.g., sending data to the server)
    // After successful registration, update the registration status
    setRegistered(true);
    setIsLoggedIn(true);
  };

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Sidebar />
        <Navbar isLoggedIn={isLoggedIn} registered={registered} />

        <Routes>
          <Route
            path="/"
            element={
              <Login
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                onRegistration={handleRegistration}
              />
            }
          />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/donate" element={<Donation />} />
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/interact" element={<Interact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
