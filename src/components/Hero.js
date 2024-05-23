import arrowIcon from "../assets/images/arrow.svg";
import heroImg from "../assets/images/hero.png";
import Button from "./Button";
import "../css/Main.scss";

function Hero() {
  return (
    <section className="Main-hero">
      <section className="Main-hero-description d-flex">
        <h1 className="fs-46 Main-header primary-text fw-bold">
          <span className="Main-header-accent">Dive</span> into the depths of{" "}
          <span className="Main-header-accent">virtual reality</span>
        </h1>
        <p className={"primary-text fs-16 Main-description"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        <div className="d-flex gap-40">
          <Button classValue={"primary-btn-big"} btnText={"Build your world"} />
          <button className="icon-btn">
            <img src={arrowIcon} alt="Arrow icon" />
          </button>
        </div>
      </section>
      <section>
        <img
          src={heroImg}
          alt="A woman in the Hydra virtual reality headset"
          className="Main-hero-img"
        />
      </section>
    </section>
  );
}

export default Hero;
