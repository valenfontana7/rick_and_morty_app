import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext(null);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "true" ? true : false
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
