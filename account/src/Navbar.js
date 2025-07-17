import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaUpload, FaUserLock, FaMoneyCheck } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center p-4 px-6">
        <h1 className="text-2xl font-bold">AccountManagement</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-full pl-10">
          {/* Center Menu */}
          <nav className="flex space-x-6 mx-auto">
            <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
              <FaHome /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
              <FaInfoCircle /> About Us
            </Link>
            <Link to="/upload" className="flex items-center gap-2 hover:text-gray-300">
              <FaUpload /> User Upload
            </Link>
            <Link to="/loan" className="flex items-center gap-2 hover:text-gray-300">
              <FaMoneyCheck /> Loan
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
              <FaPhoneAlt /> Contact
            </Link>
          </nav>

          {/* Right-aligned Login/Signup */}
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-black px-4 py-1 rounded hover:bg-gray-200 ml-auto"
          >
            <FaUserLock /> Login / Sign Up
          </Link>
        </div>

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
          <Link to="/upload" className="flex items-center gap-2 hover:text-gray-300">
            <FaUpload /> User Upload
          </Link>
          <Link to="/loan" className="flex items-center gap-2 hover:text-gray-300">
            <FaMoneyCheck /> Loan
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
            <FaPhoneAlt /> Contact
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-black w-full px-4 py-2 rounded hover:bg-gray-200"
          >
            <FaUserLock /> Login / Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
