import { createContext } from "react";
const ThemeContext = createContext();

const ThemeProvider = ({ children, theme, setTheme }) => {
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    sessionStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
