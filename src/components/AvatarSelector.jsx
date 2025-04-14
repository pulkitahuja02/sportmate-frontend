// components/AvatarSelector.jsx

import { useState } from "react";

const AvatarSelector = ({ selectedAvatar, setSelectedAvatar }) => {
  // Default avatar when the user hasn't selected one
  const defaultAvatar =
    "https://i.pinimg.com/736x/c1/7c/6d/c17c6d1e987bc93b67a76f983c8fa689.jpg"; // You can choose your own default avatar

  const avatarOptions = [
    "https://i.pinimg.com/736x/c1/7c/6d/c17c6d1e987bc93b67a76f983c8fa689.jpg",
    "https://img.freepik.com/premium-vector/cute-girl-playing-badminton-cartoon-vector-icon-illustration_995200-22855.jpg",
    "https://thumb.ac-illust.com/4e/4e57692177edafb05d731d5602b5680a_t.jpeg",
    "https://img.freepik.com/free-vector/cute-boy-playing-soccer-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4055.jpg?w=360",
    "https://i.pinimg.com/736x/99/d4/12/99d412516cc8e892d8fa5bcf911be11b.jpg",
    "https://img.freepik.com/premium-vector/happy-cute-kid-girl-playing-volleyball-field-vector-illustration_11393-894.jpg"
  ];

  return (
    <div className="mb-6">
      <label className="block text-green-700 text-xl font-semibold mb-4">
        Choose Your Avatar
      </label>
      <div className="flex gap-6 flex-wrap">
        {avatarOptions.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Avatar ${index + 1}`}
            onClick={() => setSelectedAvatar(url)}
            className={`w-24 h-24 rounded-full cursor-pointer border-4 ${
              selectedAvatar === url ? "border-green-500" : "border-transparent"
            } hover:scale-105 transition-transform duration-200`}
          />
        ))}
      </div>

      {/* Show the default avatar if the user hasn't selected one */}
      <div className="mt-6 text-center">
        <p className="text-base text-gray-600 mb-2">Selected Avatar:</p>
        <img
          src={selectedAvatar || defaultAvatar} // If no avatar selected, show default
          alt="Selected Avatar"
          className="w-28 h-28 rounded-full mx-auto border-2 border-green-500"
        />
      </div>
    </div>
  );
};

export default AvatarSelector;
