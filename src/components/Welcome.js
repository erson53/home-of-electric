import React from "react";
import "../assets/css/welcome.css";
import Hoesticker from "../assets/img/Sticker_HoE_8x7.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcome() {
  AOS.init();
  return (
    <div className="welcome-container">
      <h1 data-aos="fade-up" className="welcome-title">
        Herzlich willkommen auf unserer Webseite!
      </h1>
      <p data-aos="fade-up" className="welcome-text">
        Home of Electric ist ein technisches Unternehmen, welches sich zum Ziel
        genommen hat, jeden Auftrag persönlich entgegenzunehmen und diesen auch
        auszuführen. Somit wird bei uns jeder Auftrag zur «Chef-Sache».
      </p>
      <p data-aos="fade-up" className="welcome-text">
        Wir sind in der Haustechnik gut vernetzt, wir haben unsere direkten
        Partner, mit denen wir eng zusammenarbeiten und können Ihnen
        Gesamtlösungen liefern. Also zögern Sie nicht den, wie man so schön
        sagt: «Ideen sind wertlos, bis man diese umsetzt» Home of Electric.
      </p>
      <p data-aos="fade-up" className="welcome-text">
        Bei Fragen oder Unklarheiten stehen wir Ihnen jederzeit zur Verfügung.
      </p>
      <img
        data-aos="fade-up"
        className="welcome-home-of-electric-img"
        src={Hoesticker}
        alt="Home of Electric"
      />
    </div>
  );
}

export default Welcome;
