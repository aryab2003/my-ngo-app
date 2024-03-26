import React from "react";

const Navbar = ({ darkMode, toggleDarkMode, registered }) => {
  return (
    <nav className="bg-gray-900 fixed dark:bg-gray-900 p-4 w-full z-[49]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="#" className="text-white dark:text-gray-200 font-bold"></a>
        </div>
        <div className="space-x-4 text-white">
          <button>
            <a href="/login">Login</a>
          </button>
          {!registered && (
            <button>
              <a href="/register">Register</a>
            </button>
          )}

          {/* <button>Log out</button> */}
          {/* <button onClick={toggleDarkMode} className="text-white dark:text-gray-200">Dark Mode</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
