import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [sports, setSports] = useState([]); // Top 3 sports
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate();

  // Sports options
  const sportsOptions = ["Cricket", "Football", "Badminton", "Tennis", "Basketball", "Volleyball"];

  // Handle form submission
  const handleSignup = async () => {
    if (!name || !age || !gender || !address || sports.length < 3) {
      setError("Please fill all fields and select at least 3 sports.");
      return;
    }

    // Validate age
    if (age < 0 || age > 120) {
      setError("Please enter a valid age.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("https://sportmate-backend-i35i.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, gender, address, sports }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        navigate("/dashboard");
      } else {
        setError(data.message || "Signup failed. Please try again."); // Use backend error message
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sports selection
  const handleSportsChange = (sport) => {
    if (sports.includes(sport)) {
      setSports(sports.filter((s) => s !== sport)); // Remove sport if already selected
    } else {
      if (sports.length < 3) {
        setSports([...sports, sport]); // Add sport if less than 3 selected
      }
    }
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

      {/* Signup Form */}
      <div className="bg-gray-50 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Signup</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Name Input */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Enter Your Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Age Input */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Age
          </label>
          <input
            type="number"
            placeholder="Your Age"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* Gender Input */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Gender
          </label>
          <select
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Address Input */}
        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Your Address"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500 transition duration-300"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Sports Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Pick Top 3 Sports You Play
          </label>
          <div className="grid grid-cols-2 gap-2">
            {sportsOptions.map((sport) => (
              <button
                key={sport}
                className={`px-4 py-2 border-2 rounded-lg text-sm font-medium transition duration-300 ${
                  sports.includes(sport)
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-100"
                }`}
                onClick={() => handleSportsChange(sport)}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        {/* Signup Button */}
        <button
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 flex items-center justify-center"
          onClick={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            "Signup"
          )}
        </button>
      </div>
    </div>
  );
};

export default SignupPage;