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

  return (
    <div className="overflow-x-hidden">
      <Router>
      
      <Sidebar />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/donate" element={<Donation/>}/>
          <Route path="/shelter" element={<Shelter />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
      
    </div>
  );
}

export default App;
