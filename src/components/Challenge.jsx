import React from "react";
import { FaBullseye, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";

const Challenge = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-green-100">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
        <FaBullseye className="mr-2" /> Challenge Players in Your Locality
      </h2>

      {/* Search Bar for Locality */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter your locality..."
          className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* List of Players */}
      <div className="space-y-4">
        {/* Player 1 */}
        <div className="p-4 border border-green-50 rounded-lg hover:shadow-md transition-shadow bg-green-50 hover:bg-green-100">
          <h3 className="text-xl font-semibold text-green-800">Rahul Sharma</h3>
          <div className="mt-2 space-y-1">
            <p className="text-green-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-medium">Location:</span> Sector 12, Dwarka
            </p>
            <p className="text-green-700 flex items-center">
              <FaTrophy className="mr-2" />
              <span className="font-medium">Sports:</span> Football, Cricket
            </p>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Challenge Rahul
          </button>
        </div>

        {/* Player 2 */}
        <div className="p-4 border border-green-50 rounded-lg hover:shadow-md transition-shadow bg-green-50 hover:bg-green-100">
          <h3 className="text-xl font-semibold text-green-800">Priya Singh</h3>
          <div className="mt-2 space-y-1">
            <p className="text-green-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-medium">Location:</span> Rohini, Delhi
            </p>
            <p className="text-green-700 flex items-center">
              <FaTrophy className="mr-2" />
              <span className="font-medium">Sports:</span> Basketball, Badminton
            </p>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Challenge Priya
          </button>
        </div>

        {/* Player 3 */}
        <div className="p-4 border border-green-50 rounded-lg hover:shadow-md transition-shadow bg-green-50 hover:bg-green-100">
          <h3 className="text-xl font-semibold text-green-800">Amit Patel</h3>
          <div className="mt-2 space-y-1">
            <p className="text-green-700 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-medium">Location:</span> Gurgaon, Haryana
            </p>
            <p className="text-green-700 flex items-center">
              <FaTrophy className="mr-2" />
              <span className="font-medium">Sports:</span> Tennis, Swimming
            </p>
          </div>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Challenge Amit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;