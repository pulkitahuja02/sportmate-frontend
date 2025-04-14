// components/SaveProfile.jsx

import React, { useState } from "react";

const SaveProfile = ({ username, selectedAvatar, status }) => {
  const [message, setMessage] = useState("");

  const handleSave = async () => {
    try {
      const response = await fetch("https://sportmate-backend-i35i.onrender.com/api/auth/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          avatarlink: selectedAvatar,
          status_msg: status,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Profile updated successfully!");
      } else {
        setMessage(data.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Save Profile
      </button>

      {message && (
        <p className="mt-4 text-sm text-gray-700 font-medium">{message}</p>
      )}
    </div>
  );
};

export default SaveProfile;
