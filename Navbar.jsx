import React from "react";
import tataLogo from "../assets/tata-logo.png"; // Main Tata logo
import smallTataLogo from "../assets/tata-small-logo.png"; // Small logo on the right

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-16">
        
        {/* Left Side - Main Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={tataLogo} alt="Tata Motors Logo" className="h-10" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-800">TATA MOTORS | Better</span>
            <span className="text-xs text-gray-500">COMMERCIAL VEHICLES | Always</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Resources</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">Login</li>
        </ul>

        {/* Right Side - Buttons & Small Tata Logo */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
            Better Always &gt;
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded text-sm hover:bg-gray-300">
            Auto Expo 2025 &gt;
          </button>
          <img src={smallTataLogo} alt="Small Tata Logo" className="h-6" />
        </div>

        {/* Mobile Menu Button (for future updates) */}
        <div className="lg:hidden">
          <button className="text-gray-600 text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;