import { useEffect } from "react";

const ProfileFetcher = ({ setUsername, setAvatarLink, setStatusMsg }) => {
  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/auth/profile", { method: "GET" });
        const data = await response.json();
        
        // Set values in parent component using the passed setters
        setUsername(data.username);
        setAvatarLink(data.avatarlink || "");  // Default to empty string if no avatar
        setStatusMsg(data.status_msg || "");  // Default to empty string if no status
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [setUsername, setAvatarLink, setStatusMsg]);

  return null; // No UI component, just data fetching
};

export default ProfileFetcher;
