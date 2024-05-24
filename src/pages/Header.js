import { useContext } from "react";
import darkLogo from "../assets/images/dark-logo.svg";
import neutralLogo from "../assets/images/neutral-logo.svg";
import lightLogo from "../assets/images/light-logo.svg";
import neutralLogoText from "../assets/images/neutral-logo-text.svg";
import darkLogoText from "../assets/images/dark-logo-text.svg";
import lightLogoText from "../assets/images/light-logo-text.svg";
import darkLogoutIcon from "../assets/images/dark-logout-icon.svg";
import neutralLogoutIcon from "../assets/images/neutral-logout-icon.svg";
import lightLogoutIcon from "../assets/images/light-logout-icon.svg";
import Button from "../components/Button";
import "../css/Header.scss";
import { ThemeContext } from "../context/ThemeContext.js";

const joinHydraClickHandler = () => {
  console.log("Here should be the contact form");
};

function Header({ setToken, setWelcomeModalWindow, setTheme }) {
  const theme = useContext(ThemeContext);

  const logoutHandler = () => {
    setToken(null);
    setWelcomeModalWindow("show");
    sessionStorage.clear();
  };

  const handleDarkThemeBtn = () => {
    setTheme("dark");
    sessionStorage.setItem("theme", "dark");
  };

  const handleNeutralThemeBtn = () => {
    setTheme("neutral");
    sessionStorage.setItem("theme", "neutral");
  };

  const handleLightThemeBtn = () => {
    setTheme("light");
    sessionStorage.setItem("theme", "light");
  };

  const getLogo = () => {
    switch (theme) {
      case "dark":
        return darkLogo;
      case "light":
        return lightLogo;
      case "neutral":
        return neutralLogo;
    }
  };

  const getLogoText = () => {
    switch (theme) {
      case "dark":
        return darkLogoText;
      case "light":
        return lightLogoText;
      case "neutral":
        return neutralLogoText;
    }
  };

  const getLogoutIcon = () => {
    switch (theme) {
      case "dark":
        return darkLogoutIcon;
      case "light":
        return lightLogoutIcon;
      case "neutral":
        return neutralLogoutIcon;
    }
  };

  return (
    <header>
      <ul className="d-flex Header-container align-items-center">
        <li>
          <img src={getLogo()} alt="Hydra logo" className="me-15" />
          <img src={getLogoText()} alt="Hydra text logo" />
        </li>
        <li>
          <ul className="d-flex gap-40 fw-bold">
            <li>
              <a href="" className={`${theme}-primary-text`}>
                About
              </a>
            </li>
            <li>
              <a href="" className={`${theme}-primary-text`}>
                Services
              </a>
            </li>
            <li>
              <a href="" className={`${theme}-primary-text`}>
                Technologies
              </a>
            </li>
            <li>
              <a href="" className={`${theme}-primary-text`}>
                How to
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="d-flex gap-40">
            <li>
              <Button
                classValue={`secondary-btn ${theme}-primary-text`}
                btnText={"Contact us"}
              />
            </li>
            <li>
              <Button
                classValue={`primary-btn primary-btn-animation-${theme} ${theme}-bg-primary-gradient`}
                btnText={"Join Hydra"}
                handleMouseClick={joinHydraClickHandler}
              />
            </li>
          </ul>
        </li>
        <li className="Header-theme-btns">
          <ul className="d-flex">
            <li>
              <Button
                classValue={"theme-btn-dark dark-bg-primary"}
                handleMouseClick={handleDarkThemeBtn}
              />
            </li>
            <li>
              <Button
                classValue={"theme-btn-neutral neutral-bg-primary"}
                handleMouseClick={handleNeutralThemeBtn}
              />
            </li>
            <li>
              <Button
                classValue={"theme-btn-light"}
                handleMouseClick={handleLightThemeBtn}
              />
            </li>
          </ul>
        </li>
        <li className="Header-logout-btn">
          <button className="icon-btn" onClick={logoutHandler}>
            <img src={getLogoutIcon()} alt="Logout icon" />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
