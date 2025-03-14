import React, { useState } from "react";
import { FaUserCircle, FaStar } from "react-icons/fa";

const MyProfile = () => {
  const [selectedSports, setSelectedSports] = useState([]);
  const [ratings, setRatings] = useState({});

  // List of sports to choose from
  const sportsList = ["Football", "Basketball", "Tennis", "Cricket", "Swimming"];

  // Handle sport selection
  const handleSportSelection = (sport) => {
    if (selectedSports.includes(sport)) {
      setSelectedSports(selectedSports.filter((item) => item !== sport));
    } else {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  // Handle rating change
  const handleRatingChange = (sport, rating) => {
    setRatings({ ...ratings, [sport]: rating });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-8">My Profile</h1>

        {/* Upload Image Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Upload Your Image</h2>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center px-4 py-6 bg-green-50 text-green-700 rounded-lg shadow tracking-wide border border-green-300 cursor-pointer hover:bg-green-100">
              <FaUserCircle className="w-12 h-12 mb-2" />
              <span className="mt-2 text-base leading-normal">Upload a file</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Choose Favorite Sports Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Choose Your Favorite Sports</h2>
          <div className="grid grid-cols-2 gap-4">
            {sportsList.map((sport) => (
              <div
                key={sport}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedSports.includes(sport)
                    ? "bg-green-100 border-2 border-green-500"
                    : "bg-gray-50 border-2 border-gray-200"
                }`}
                onClick={() => handleSportSelection(sport)}
              >
                <span className="text-green-700 font-medium">{sport}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rating for Each Sport Section */}
        <div>
          <h2 className="text-xl font-semibold text-green-700 mb-4">Rate Your Favorite Sports</h2>
          {selectedSports.map((sport) => (
            <div key={sport} className="mb-4">
              <h3 className="text-lg font-medium text-green-700 mb-2">{sport}</h3>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRatingChange(sport, star)}
                    className={`text-2xl ${
                      ratings[sport] >= star ? "text-green-500" : "text-gray-300"
                    }`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;