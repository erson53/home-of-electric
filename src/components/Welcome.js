import React from "react";
import "../assets/css/welcome.css";
import Hoesticker from "../assets/img/Sticker_HoE_8x7.svg";

function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        Herzlich willkommen auf unserer Webseite!
      </h1>
      <p className="welcome-text">
        Home of Electric ist ein technisches Unternehmen, welches sich zum Ziel
        genommen hat, jeden Auftrag persönlich entgegenzunehmen und diesen auch
        auszuführen. Somit wird bei uns jeder Auftrag zur «Chef-Sache».
      </p>
      <p className="welcome-text">
        Wir sind in der Haustechnik gut vernetzt, wir haben unsere direkten
        Partner, mit denen wir eng zusammenarbeiten und können Ihnen
        Gesamtlösungen liefern. Also zögern Sie nicht den, wie man so schön sagt:
        «Ideen sind wertlos, bis man diese umsetzt» Home of Electric.
      </p>
      <p className="welcome-text">
        Bei Fragen oder Unklarheiten stehen wir Ihnen jederzeit zur Verfügung.
      </p>
      <img
        className="welcome-home-of-electric-img"
        src={Hoesticker}
        alt="Home of Electric"
      />
    </div>
  );
}

export default Welcome;
