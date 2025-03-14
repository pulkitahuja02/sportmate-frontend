import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import UpcomingTournaments from "../components/UpcomingTournaments";
import Challenge from "../components/Challenge"; // Import the new component

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Main Content */}
      <div className="p-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upcoming Tournaments */}
          <UpcomingTournaments />

          {/* Challenge Players */}
          <Challenge />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;