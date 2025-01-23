import { createContext, useState, useContext } from "react";

// Buat Context
const CursorContext = createContext();

// Provider untuk membungkus aplikasi
export const CursorProvider = ({ children }) => {
  const [isHovering, setIsHovering] = useState("default");

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

// Hook untuk mempermudah akses
// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => useContext(CursorContext);
