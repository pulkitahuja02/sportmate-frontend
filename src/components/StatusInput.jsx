// components/StatusInput.jsx

import React from "react";

const StatusInput = ({ status, setStatus }) => {
  const maxWords = 30;

  const handleChange = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setStatus(e.target.value);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-green-700 text-xl font-semibold mb-4">
        Write Your Status (max {maxWords} words)
      </label>
      <textarea
        rows="3"
        value={status}
        onChange={handleChange}
        placeholder="Type your status here..."
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <div className="text-sm text-gray-500 mt-1">
        Words: {status.trim() === "" ? 0 : status.trim().split(/\s+/).length}/{maxWords}
      </div>
    </div>
  );
};

export default StatusInput;
