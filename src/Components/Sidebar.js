// Sidebar.js
import React, { useState } from "react";
import Carousel from "./Carousel";
import { IoHomeOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaPersonShelter } from "react-icons/fa6";
import { FaDonate } from "react-icons/fa";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const sidebarItems = [
    { name: "Home", icon: <IoHomeOutline />, href: '/home' },
    { name: "About Us", icon: <FaUsers />, href: '/about us'},
    { name: "Shelter", icon: <FaPersonShelter />, href:'/shelter'},
    { name: "Donate", icon: <FaDonate />, href:'/donate' },
    // Add more sidebar items as needed
  ];

  return (
    <div
      className={`z-[999] fixed top-0 left-0 h-full bg-gray-900 transition-width duration-300 ${
        expanded ? "w-56" : "w-16"
      }`}
    >
      <div className="flex justify-end p-4">
        <button className="text-white" onClick={toggleSidebar}>
          {expanded ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Sidebar content */}
      <div className={`mt-8 space-y-5 items-center ${expanded ? " duration-300" : ""}`}>
        {sidebarItems.map((item) => (
          <div key={item.name} className="flex items-center px-4 py-2">
            <a
              href={item.href}
              className={`text-white }`}
            >
              {item.icon}
            </a>
            {expanded && (
              <a
                href={item.href}
                className={`text-white ml-2 transition-opacity duration-300 ${
                  expanded ? " opacity-100" : "opacity-0"
                }`}
              >
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
