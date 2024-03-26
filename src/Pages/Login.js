import React, { useState } from "react";

const Login = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Simulate successful login
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Simulate logout
    setIsLoggedIn(false);
  };

  return (
    <div>
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        // If logged in, display greeting and logout button
        <div>
          <h1>Hello User!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        // If not logged in, display login form
        <div>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
