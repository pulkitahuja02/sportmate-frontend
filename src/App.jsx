import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/MyProfile";
import SignupPage from "./pages/SignupPage";  // ✅ Import SignupPage
import EmailVerification from "./pages/EmailVerification";  // ✅ Import EmailVerification

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/signup" element={<SignupPage />} />  {/* ✅ Add Route */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;