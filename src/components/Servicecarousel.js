import React from "react";
import "../assets/css/carouselpage.css";
import Carousel from "react-bootstrap/Carousel";
import Thermometer from "../assets/img/thermometer-snow.svg";
import Droplet from "../assets/img/droplet.svg";
import Lightbulb from "../assets/img/lightbulb.svg";
import Speaker from "../assets/img/speaker.svg";
import Camera from "../assets/img/camera-video.svg";
import Key from "../assets/img/key.svg";
import Home from "../assets/img/house.svg";

function Servicecarousel() {
  return (
    <>
      <div className="page-container">
        <Carousel className="carousel-container">
          <Carousel.Item className="carousel-item">
            <img
              className="carousel-image"
              src={Thermometer}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-caption">
              <h1>Heizung, Lüftung, Klimatisierung</h1>
              <p>
                Sie wollen Ihre Heizung modernisieren, eine neue Badlüftung oder
                im Sommer an heißen Tagen eine neue Klimaanlage? Dann sind Sie
                bei Home of Electric genau richtig. Wir beraten Sie gerne beim
                Kauf und der Ausführung technischer Installationen.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Droplet} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Sanitär</h1>
              <p>
                Ist Ihr Boiler, Ihre Geschirrwaschmaschine, oder eines Ihrer
                Hausgeräte defekt? Oder Sie wollen diese durch effizientere
                ersetzen? Wir können Ihnen bei der Suche und Umsetzung
                behilflich sein.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Lightbulb} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Elektro</h1>
              <p>
                In diesem Bereich fühlen wir uns wohl und sicher im Umgang mit
                Elektrotechnik für Ihr zu Hause. Egal ob es nur eine Glühbirne
                zum Austauschen gibt oder Sie Ihr zu Hause in ein „SmartHome“
                umrüsten wollen, wir haben kundenfreundliche Gesamtlösungen
                bereit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Speaker} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Lautsprecher</h1>
              <p>
                Homecinema im Wohnzimmer? Oder unter der Dusche Radio hören?
                Kein Problem! Wir bieten für Sie Gesamtlösungen für Ihr zu
                Hause.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Camera} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Überwachung, Alarmierung</h1>
              <p>
                Sie fühlen sich nicht zu 100% sicher in Ihrem Eigenheim? Gerne
                beraten wir Sie, wie Sie Ihr zu Hause sicherer machen können.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Key} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Zutrittskontrolle</h1>
              <p>
                Keine Lust auf einen riesigen Schlüsselbund wie ein Hausmeister?
                Wir können Ihnen das Leben einfacher machen, in dem Sie nur Ihren
                Finger brauchen, um Türen zu öffnen.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img className="carousel-image" src={Home} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h1>Home Services</h1>
              <p>
                Sie möchten mehr im Homeoffice arbeiten oder eine TV-Wand
                montieren und benötigen bei der Einrichtung fachliche Hilfe? Dann
                zögern Sie nicht und kontaktieren Sie uns!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default Servicecarousel;
