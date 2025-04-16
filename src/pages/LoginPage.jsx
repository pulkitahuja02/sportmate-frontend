import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import AuthFormLayout from "../components/auth/AuthFormLayout";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";
import ErrorMessage from "../components/auth/ErrorMessage";

const LoginPage = () => {
  // State management
  const { username, setUsername } = useUser();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
  
    setError("");
    setIsLoading(true);
  
    try {
      const response = await fetch("https://sportmate-backend-i35i.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include"  // 👈 This ensures the session cookie is sent
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigate("/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout title="Login">
      {/* Error Message */}
      <ErrorMessage error={error} />

      {/* Username Input */}
      <AuthInput
       label="Username"
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
       placeholder="Enter your username here"
      />

      {/* Password Input */}
      <AuthInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      {/* Login Button */}
      <AuthButton
        isLoading={isLoading}
        onClick={handleLogin}
        text="Login"
      />

      {/* Footer Link */}
      <AuthFooter
        text="New user?"
        linkText="Signup"
        onClick={() => navigate("/email-verification")}
      />
    </AuthFormLayout>
  );
};

export default LoginPage;