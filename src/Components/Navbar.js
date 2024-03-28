import React from "react";

const Navbar = ({ isLoggedIn, registered }) => {
  return (
    <nav className="bg-gray-900 fixed dark:bg-gray-900 p-4 w-full z-[49]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <a href="#" className="text-white dark:text-gray-200 font-bold"></a> */}
        </div>
        <div className="space-x-4 text-white">
          {isLoggedIn ? (
            <button>
              <a href="/">Logout</a>
              {console.log("user logged out")}
            </button>
          ) : (
            <button>
              <a href="/">Login</a>
            </button>
          )}
          {!registered && !isLoggedIn && (
            <button>
              <a href="/register">Register</a>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
