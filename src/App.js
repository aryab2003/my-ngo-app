import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Donation from "./Pages/Donation";
import Shelter from "./Pages/Shelter";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  // const [shelters, setShelters] = useState([]);

  // useEffect(() => {
  //   async function fetchShelters() {
  //     try {
  //       const response = await axios.get("http://localhost:3000/ngo");
  //       setShelters(response.data);
  //     } catch (error) {
  //       console.error("Error fetching shelters:", error);
  //     }
  //   }

  //   fetchShelters();
  // }, []);
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
    setIsLoggedIn(true)
    
  };

  return (
    <div className="overflow-x-hidden">
      <Router>
        <Sidebar />
        <Navbar isLoggedIn={isLoggedIn} registered={registered} />

        <Routes>
          <Route
            path="/"
            element={<Login handleLogin={handleLogin} handleLogout={handleLogout} onRegistration={handleRegistration} />}
          />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/donate" element={<Donation />} />
          <Route path="/shelter" element={<Shelter />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register handleRegistration={handleRegistration} handleLogin={handleLogin} handleLogout={handleLogout} />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
