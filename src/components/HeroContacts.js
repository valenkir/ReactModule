import locationIcon from "../assets/images/location-icon.svg";
import phoneIcon from "../assets/images/phone-icon.svg";
import mailIcon from "../assets/images/mail-icon.svg";
import "../css/HeroContacts.scss";

function HeroContacts() {
  return (
    <section className="HeroContacts-container d-flex align-items-center">
      <div className="primary-text HeroContacts-contact-block d-flex align-items-center">
        <img src={locationIcon} alt="Location icon" />
        <div>
          <h3 className="fs-24 fw-bold">Pay Us a Visit</h3>
          <p>Union St, Seattle, WA 98101, United States</p>
        </div>
      </div>
      <div className="primary-text HeroContacts-contact-block d-flex align-items-center">
        <img src={phoneIcon} alt="Phone call icon" />
        <div>
          <h3 className="fs-24 fw-bold">Give Us a Call</h3>
          <p>(110) 1111-1010</p>
        </div>
      </div>
      <div className="primary-text HeroContacts-contact-block d-flex align-items-center">
        <img src={mailIcon} alt="Mail icon" />
        <div>
          <h3 className="fs-24 fw-bold">Send Us a Message</h3>
          <p>Contact@HydraVTech.com</p>
        </div>
      </div>
    </section>
  );
}

export default HeroContacts;
