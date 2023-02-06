import React from "react";
import "../assets/css/contactdata.css";
import Telephone from "../assets/img/telephone.svg";
import Mail from "../assets/img/mail.svg";
import Instagram from "../assets/img/instagram.svg";

function Contactdata() {
  return (
    <div className="contact-data-section-container">
      <div className="contact-data-container">
        <div className="contact-data-icon-container">
          <img src={Telephone} alt="telephone" className="contact-data-icon" />
        </div>
        <div className="contact-data-button-container">
          <a href="tel:+41764095715">
            <button className="contact-data-button">
              <h4 className="contact-data-button-text">Anrufen</h4>
            </button>
          </a>
        </div>
      </div>

      <div className="contact-data-container">
        <div className="contact-data-icon-container">
          <img src={Mail} alt="mail" className="contact-data-icon" />
        </div>
        <div className="contact-data-button-container">
          <a href="mailto:info@homeofelectric.ch">
            <button className="contact-data-button">
              <h4 className="contact-data-button-text">Mail schreiben</h4>
            </button>
          </a>
        </div>
      </div>

      <div className="contact-data-container">
        <div className="contact-data-icon-container">
          <img src={Instagram} alt="Insta" className="contact-data-icon" />
        </div>
        <div className="contact-data-button-container">
          <a href="https://www.instagram.com/homeofelectric/">
            <button className="contact-data-button">
              <h4 className="contact-data-button-text">Instagram</h4>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contactdata;
