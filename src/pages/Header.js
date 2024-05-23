import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logo-text.svg";
import Button from "../components/Button";
import "../css/Header.scss";
import logoutIcon from "../assets/images/arrow-right-from-bracket-solid.svg";
import { setPrimText, setPrimGradientBg } from "../helperFunctions";

const joinHydraClickHandler = () => {
  console.log("Here should be the contact form");
};

function Header({ setToken, setWelcomeModalWindow, setTheme, theme = "dark" }) {
  const logoutHandler = () => {
    setToken(null);
    setWelcomeModalWindow("show");
    sessionStorage.clear();
  };

  const handleDarkThemeBtn = () => {
    setTheme("dark");
  };

  const handleNeutralThemeBtn = () => {
    setTheme("neutral");
  };

  return (
    <header>
      <ul className="d-flex Header-container align-items-center">
        <li>
          <img src={logo} alt="Hydra logo" className="me-15" />
          <img src={logoText} alt="Hydra text logo" />
        </li>
        <li>
          <ul className="d-flex gap-40 fw-bold">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">How to</a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="d-flex gap-40">
            <li>
              <Button
                classValue={`secondary-btn` + " " + setPrimText(theme)}
                btnText={"Contact us"}
              />
            </li>
            <li>
              <Button
                classValue={"primary-btn" + " " + setPrimText(theme)}
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
                classValue={"theme-btn-dark"}
                handleMouseClick={handleDarkThemeBtn}
              />
            </li>
            <li>
              <Button
                classValue={"theme-btn-neutral"}
                handleMouseClick={handleNeutralThemeBtn}
              />
            </li>
            <li>
              {" "}
              <Button classValue={"theme-btn-light"} />
            </li>
          </ul>
        </li>
        <li className="Header-logout-btn">
          <button className="icon-btn" onClick={logoutHandler}>
            {" "}
            <img src={logoutIcon} alt="Logout icon" />
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
