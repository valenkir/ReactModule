import bgLine1 from "./assets/images/bg-line-1.svg";
import bgLine2 from "./assets/images/bg-line-2.svg";
import bgLine3 from "./assets/images/bg-line-3.svg";
import bgLine4 from "./assets/images/bg-line-4.svg";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import ModalWindow from "./components/ModalWindow";
import "./css/reset.css";
import "./css/utilities.scss";
import "./css/App.scss";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  const [welcomeModalWindow, setWelcomeModalWindow] = useState("show");
  const handleOkBtn = () => {
    setWelcomeModalWindow("hide");
  };

  if (!sessionStorage.getItem("authToken")) {
    return <Login setToken={setToken} />;
  } else {
    if (welcomeModalWindow !== "hide") {
      return (
        <ModalWindow
          classValue={"ModalWindow-container d-flex"}
          okBtnHandler={handleOkBtn}
        />
      );
    }
    return (
      <div className="App-main-container">
        <img
          className="App-bg-line App-bg-line-1"
          src={bgLine1}
          alt="Background image: decorative line"
        />
        <img
          className="App-bg-line App-bg-line-2"
          src={bgLine2}
          alt="Background image: decorative line"
        />
        <img
          className="App-bg-line App-bg-line-3"
          src={bgLine3}
          alt="Background image: decorative line"
        />
        <img
          className="App-bg-line App-bg-line-4"
          src={bgLine4}
          alt="Background image: decorative line"
        />
        <Header
          setToken={setToken}
          setWelcomeModalWindow={setWelcomeModalWindow}
        />
        <Main />
      </div>
    );
  }
}

export default App;
