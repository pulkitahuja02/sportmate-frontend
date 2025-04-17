import { useEffect } from "react";

const ProfileFetcher = ({ setUsername, setAvatarLink, setStatusMsg }) => {
  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log("ProfileFetcher 1: Starting fetch");

      try {
        const response = await fetch("https://sportmate-backend-i35i.onrender.com/api/auth/profile", {
          method: "GET",
          credentials: "include",
        });

        console.log("ProfileFetcher 2: Received response", response);

        const data = await response.json();

        console.log("ProfileFetcher 3: Parsed JSON", data);

        // Set default values if data is not available
        setUsername(data.username || "PULKIT SIR");
        setAvatarLink(data.avatarlink || "");
        setStatusMsg(data.status_msg || "");

        console.log("ProfileFetcher 4: Set state with data");
      } catch (error) {
        console.error("ProfileFetcher Error:", error);
        // Set defaults if fetch fails
        setUsername("PULKIT SIR");
        setAvatarLink("");
        setStatusMsg("");
      }
    };

    fetchUserProfile();
  }, [setUsername, setAvatarLink, setStatusMsg]);

  return null;
};

export default ProfileFetcher;