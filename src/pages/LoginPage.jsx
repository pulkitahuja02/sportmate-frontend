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

  const handleLogin = () => {
    // Validation logic
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
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 2000);
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
       placeholder="Enter your username"
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