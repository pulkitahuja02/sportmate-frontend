import React, { useState } from "react";
import AvatarSelector from "../components/AvatarSelector";
import StatusInput from "../components/StatusInput";
import ProfileFetcher from "../components/ProfileFetcher";
import SaveProfile from "../components/SaveProfile";

const MyProfile = () => {
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-green-700 mb-8">My Profile</h1>

        {/* Fetch User Profile Data */}
        <ProfileFetcher
          setUsername={setUsername}
          setAvatarLink={setSelectedAvatar}
          setStatusMsg={setStatus}
        />

        {/* Display Username */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Username: {username}</h2>
        </div>

        {/* Avatar Section */}
        <div className="mb-8">
          {selectedAvatar ? (
            <div className="mb-4">
              <p className="text-gray-700 mb-2">Current Avatar:</p>
              <img src={selectedAvatar} alt="Avatar" className="w-32 h-32 rounded-full" />
            </div>
          ) : (
            <p className="mb-2 text-gray-500">Select an avatar:</p>
          )}
          <AvatarSelector
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
        </div>

        {/* Status Section */}
        <div className="mb-8">
          {status ? (
            <div className="mb-2">
              <p className="text-gray-700">Current Status: {status}</p>
            </div>
          ) : (
            <p className="mb-2 text-gray-500">Set a status message:</p>
          )}
          <StatusInput status={status} setStatus={setStatus} />
        </div>

        {/* Save Profile Button */}
        <SaveProfile
          username={username}
          selectedAvatar={selectedAvatar}
          status={status}
        />
      </div>
    </div>
  );
};

export default MyProfile;
