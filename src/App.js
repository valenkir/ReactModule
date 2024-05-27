import { useState } from "react";
import Landing from "./pages/Landing.js";
import Login from "./pages/Login";
import { ThemeProvider } from "./context/Theme.js";
import "./css/reset.css";
import "./css/utilities.scss";
import "./css/App.scss";

function App() {
  const [token, setToken] = useState(null);
  const savedTheme = sessionStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme ? savedTheme : "dark");

  const authToken = sessionStorage.getItem("authToken");
  const [page, setPage] = useState(authToken ? "landing" : "login");

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      {page === "landing" && (
        <div className={`App-main-container ${theme}-bg-primary`}>
          <Landing setToken={setToken} setPage={setPage} />
        </div>
      )}
      {page === "login" && <Login setToken={setToken} setPage={setPage} />}
    </ThemeProvider>
  );
}

export default App;
