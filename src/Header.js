import logo from "./assets/images/logo.svg";
import logoText from "./assets/images/logo-text.svg";
import Button from "./Button";

function Header() {
  return (
    <header>
      <ul className="d-flex justify-space-around align-items-center">
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
              <Button classValue={"primary-btn"} btnText={"Join Hydra"} />
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
}

export default Header;
