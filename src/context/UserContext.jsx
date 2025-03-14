import { createContext, useContext, useState } from "react";

// Context create kara
const UserContext = createContext();

// Provider Component jo pura app wrap karega
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook taaki har jagah easy access ho
export const useUser = () => {
  return useContext(UserContext);
};
