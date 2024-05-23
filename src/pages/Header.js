import logo from "../assets/images/logo.svg";
import logoText from "../assets/images/logo-text.svg";
import Button from "../components/Button";
import "../css/Header.scss";
import logoutIcon from "../assets/images/arrow-right-from-bracket-solid.svg";

const joinHydraClickHandler = () => {
  console.log("Here should be the contact form");
};

function Header() {
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
              <Button classValue={"secondary-btn"} btnText={"Contact us"} />
            </li>
            <li>
              <Button
                classValue={"primary-btn"}
                btnText={"Join Hydra"}
                handleMouseClick={joinHydraClickHandler}
              />
            </li>
          </ul>
          <li>
            <button className="Header-logout-btn icon-btn">
              {" "}
              <img src={logoutIcon} alt="Logout icon" />
            </button>
          </li>
        </li>
      </ul>
    </header>
  );
}

export default Header;
