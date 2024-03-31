import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const Login = ({ history, handleLogin, handleLogout }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const firebaseConfig = {
    apiKey: "AIzaSyB7o3RDQK2SMApL-NvFlfXtggL060O8kyM",
    authDomain: "ngofe-98743.firebaseapp.com",
    projectId: "ngofe-98743",
    storageBucket: "ngofe-98743.appspot.com",
    messagingSenderId: "140441035734",
    appId: "1:140441035734:web:92d979011f7b3309bfba77",
    measurementId: "G-JWW7N3XXR1",
  };
  // Initialize Firebase
  initializeApp(firebaseConfig);

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setIsLoggedIn(true);
      
      
      

      // Retrieve user's name from authentication result
      const userDisplayName = result.user.displayName;
      setUserName(userDisplayName);

      // Redirect to home page after 5 seconds
      setTimeout(() => {
        navigate('/home');
         handleLogin();
        
        // Change "/home" to the actual path of your home page
      }, 2000);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.3)",
        }}
      >
        {isLoggedIn ? (
          <div>
            <h1 style={{ color: "#4a00e0" }}>Welcome {userName}!</h1>
            <button
              style={{
                backgroundColor: "#FF5733",
                color: "#FFF",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button className="bg-gray-800 hover:bg-gray-900 text-white"
              style={{
                
                
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
