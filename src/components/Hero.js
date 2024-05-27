import { useContext } from "react";
import darkArrowIcon from "../assets/images/arrow-dark.svg";
import neutralArrowIcon from "../assets/images/arrow-neutral.svg";
import lightArrowIcon from "../assets/images/arrow-light.svg";
import heroImg from "../assets/images/hero.png";
import Button from "./Button";
import "../css/utilities.scss";
import "../css/Landing.scss";
import { ThemeContext } from "../context/Theme.js";

function Hero() {
  const { theme } = useContext(ThemeContext);

  const getArrowIcon = () => {
    switch (theme) {
      case "dark":
        return darkArrowIcon;
      case "neutral":
        return neutralArrowIcon;
      case "light":
        return lightArrowIcon;
      default:
        break;
    }
  };

  return (
    <section className="Landing-hero">
      <section className="Landing-hero-description d-flex">
        <h1 className={`fs-46 Landing-header ${theme}-primary-text fw-bold`}>
          <span className={`${theme}-accent-text`}>Dive</span> into the depths
          of <span className={`${theme}-accent-text`}>virtual reality</span>
        </h1>
        <p className={`${theme}-primary-text fs-16 Landing-description`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <div className="d-flex gap-40">
          <Button
            classValue={`primary-btn-big primary-btn-big-animation-${theme} ${theme}-bg-primary-gradient`}
            btnText={"Build your world"}
          />
          <button className="icon-btn">
            <img src={getArrowIcon()} alt="Arrow icon" />
          </button>
        </div>
      </section>
      <section>
        <img
          src={heroImg}
          alt="A woman in the Hydra virtual reality headset"
          className={`Landing-hero-img-${theme}`}
        />
      </section>
    </section>
  );
}

export default Hero;
