import { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("about-me");
  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNav = () => {
  return useContext(NavContext);
};
