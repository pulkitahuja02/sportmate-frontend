import React from 'react';

const AuthInput = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  className = '' 
}) => {
  return (
    <div className={`mb-5 ${className}`}>
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg 
                 focus:outline-none focus:border-green-500 
                 focus:ring-2 focus:ring-green-500 transition duration-300"
      />
    </div>
  );
};

export default AuthInput;  // Proper export at the end