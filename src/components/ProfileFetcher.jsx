import { useEffect } from "react";

const ProfileFetcher = ({ setUsername, setAvatarLink, setStatusMsg }) => {
  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log("ProfileFetcher 1: Starting fetch");

      try {
        const response = await fetch("https://sportmate-backend-i35i.onrender.com/api/auth/profile", {
          method: "GET",
          credentials: "include", // Include this if you're using cookies/sessions
        });

        console.log("ProfileFetcher 2: Received response", response);

        const data = await response.json();

        console.log("ProfileFetcher 3: Parsed JSON", data);

        setUsername(data.username);
        setAvatarLink(data.avatarlink || "");
        setStatusMsg(data.status_msg || "");

        console.log("ProfileFetcher 4: Set state with data");
      } catch (error) {
        console.error("ProfileFetcher Error:", error);
      }
    };

    fetchUserProfile();
  }, [setUsername, setAvatarLink, setStatusMsg]);

  return null;
};

export default ProfileFetcher;
