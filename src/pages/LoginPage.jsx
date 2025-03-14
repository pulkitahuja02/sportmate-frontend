import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { username, setUsername } = useUser();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username && !password) {
      setError("Please enter valid credentials");
      return;
    } else if (!username) {
      setError("Please enter your username");
      return;
    } else if (!password) {
      setError("Please enter your password");
      return;
    }

    setError(""); // Clear error if all fields are valid
    setIsLoading(true); // Show loading spinner
    console.log("Logging in with:", username, password);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-poppins">
      {/* Logo and Tagline */}
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-green-600 mb-4">SportMate</h1>
        <p className="text-lg text-black italic">
          "Bring Back the Game, Bring Back the Passion."
        </p>
      </div>

      {/* Login Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Username Input */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            "Login"
          )}
        </button>
        <p className="text-center mt-4 text-gray-700">
         New user? <span className="text-green-600 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>Signup</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
