import { useState, useContext } from "react";
import ModalWindow from "../components/ModalWindow";
import Header from "./Header";
import Hero from "../components/Hero";
import HeroContacts from "../components/HeroContacts";
import { ThemeContext } from "../context/Theme";
import bgLine1 from "../assets/images/bg-line-1.svg";
import bgLine2 from "../assets/images/bg-line-2.svg";
import bgLine3 from "../assets/images/bg-line-3.svg";
import bgLine4 from "../assets/images/bg-line-4.svg";

function Main({ setToken, setPage }) {
  const { theme } = useContext(ThemeContext);
  const [welcomeModalWindow, setWelcomeModalWindow] = useState();

  const handleOkBtn = () => {
    setWelcomeModalWindow("hide");
    sessionStorage.setItem("welcomeModalWindow", "hide");
  };

  return (
    <main>
      {!sessionStorage.getItem("welcomeModalWindow") && (
        <ModalWindow
          classValue={`${theme}-bg-secondary-gradient ModalWindow-container d-flex`}
          okBtnHandler={handleOkBtn}
        />
      )}
      <img
        className={`Landing-bg-line Landing-bg-line-1 Landing-bg-line-${theme}`}
        src={bgLine1}
        alt="Background image: decorative line"
      />
      <img
        className={`Landing-bg-line Landing-bg-line-2 Landing-bg-line-${theme}`}
        src={bgLine2}
        alt="Background image: decorative line"
      />
      <img
        className={`Landing-bg-line Landing-bg-line-3 Landing-bg-line-${theme}`}
        src={bgLine3}
        alt="Background image: decorative line"
      />
      <img
        className="Landing-bg-line Landing-bg-line-4"
        src={bgLine4}
        alt="Background image: decorative line"
      />
      <Header setToken={setToken} setPage={setPage} />
      <Hero />
      <HeroContacts />
    </main>
  );
}

export default Main;
