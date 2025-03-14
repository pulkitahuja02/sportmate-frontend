import React from "react";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const UpcomingTournaments = () => {
  const tournaments = [
    {
      id: 1,
      name: "St Angel Football League",
      date: "25th March 2025",
      location: "St Angel School",
    },
    {
      id: 2,
      name: "MAIT Cricket Premiere League",
      date: "30th March 2025",
      location: "MAIT Ground",
    },
    {
      id: 3,
      name: "Basketball Championship",
      date: "5th March 2025",
      location: "Japanese Park",
    },
    {
      id: 4,
      name: "Delhi Marathon 2025",
      date: "15th April 2025",
      location: "India Gate, Delhi",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-green-100">
      <h2 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
        <FaTrophy className="mr-2" /> Upcoming Tournaments
      </h2>
      <div className="space-y-4">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="p-4 border border-green-50 rounded-lg hover:shadow-md transition-shadow bg-green-50 hover:bg-green-100"
          >
            <h3 className="text-xl font-semibold text-green-800">{tournament.name}</h3>
            <div className="mt-2 space-y-1">
              <p className="text-green-700 flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span className="font-medium">Date:</span> {tournament.date}
              </p>
              <p className="text-green-700 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span className="font-medium">Location:</span> {tournament.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full flex items-center justify-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
        View All Tournaments
      </button>
    </div>
  );
};

export default UpcomingTournaments;