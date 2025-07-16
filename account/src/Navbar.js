import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUpload, FaUserLock } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center p-4 px-6">
        <h1 className="text-2xl font-bold">AccountApp</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
            <FaInfoCircle /> About Us
          </Link>
          <Link to="/login" className="flex items-center gap-2  hover:bg-gray-300">
            <FaUserLock /> Login / Sign up 
          </Link>
          <Link to="/upload" className="flex items-center gap-2  hover:bg-gray-200">
            <FaUpload /> User Upload
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
            <FaPhoneAlt /> Contact
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
            <FaHome /> Home
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
            <FaInfoCircle /> About Us
          </Link>
          <Link to="/login" className="flex items-center gap-2 bg-white text-black w-full px-4 py-2 rounded hover:bg-gray-200">
            <FaUserLock /> Login / Sign Up
          </Link>
          <Link to="/upload" className="flex items-center gap-2 bg-white text-black w-full px-4 py-2 rounded hover:bg-gray-200">
            <FaUpload /> User Upload
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
            <FaPhoneAlt /> Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
