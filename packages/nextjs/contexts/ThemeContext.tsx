import React from "react";

export const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [isDark, setDarkTheme] = React.useState(false);
  const value = {
    isDark,
    setDarkTheme
  };

  React.useEffect(() => {
    if (typeof window !== "undefined" && "localStorage" in window && window["localStorage"] !== null) {
      setDarkTheme(localStorage.getItem("darkMode") == "true");
    }
  }, []);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
