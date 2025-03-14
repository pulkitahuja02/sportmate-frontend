import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white p-6 pt-8 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: SportMate (Green Color) */}
          <h1 className="text-4xl font-bold text-green-600">SportMate</h1>

          {/* Mid: Links (Desktop View) */}
          <div className="hidden md:flex space-x-12">
            <Link to="/game-buddies" className="text-xl text-gray-700 hover:text-green-600">Game Buddies</Link>
            <Link to="/tournaments" className="text-xl text-gray-700 hover:text-green-600">Tournaments</Link>
            <Link to="/leaderboard" className="text-xl text-gray-700 hover:text-green-600">Leaderboard</Link>
            <Link to="/community" className="text-xl text-gray-700 hover:text-green-600">Community</Link>
          </div>

          {/* Hamburger Menu (Mobile View) */}
          <div className="md:hidden text-gray-700 hover:text-green-600">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Chote screens par show) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link to="/game-buddies" className="block text-xl text-gray-700 hover:text-green-600 py-2">Game Buddies</Link>
            <Link to="/tournaments" className="block text-xl text-gray-700 hover:text-green-600 py-2">Tournaments</Link>
            <Link to="/leaderboard" className="block text-xl text-gray-700 hover:text-green-600 py-2">Leaderboard</Link>
            <Link to="/community" className="block text-xl text-gray-700 hover:text-green-600 py-2">Community</Link>
          </div>
        )}
      </nav>

      {/* My Profile Button (Navbar ke neeche, center-aligned) */}
      <div className="w-full flex justify-center bg-green-50 py-4 shadow-sm">
        <Link
          to="/MyProfile" // Updated to match your App.jsx route
          className="flex items-center justify-center bg-green-600 text-white text-xl font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          <FaUserCircle className="text-2xl mr-2" />
          <span>My Profile</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;