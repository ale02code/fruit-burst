import React from "react";
import ImgPresentation from "../assets/imgs/presentation.jpeg";
import Button from "./Button";

function Home() {
  return (
    <section className="home">
      <img
        className="home__imgPresentation"
        src={ImgPresentation}
        alt="Presentation Image"
      />
      <div className="home__texts">
        <h1 className="home__texts__title">Sabor fresco Sabor natural</h1>
        <h2 className="home__texts__subtitle">
          Bebidas frías cuidadosamente elaboradas, ofreciendo un excelente
          servicio y atención al cliente.
        </h2>
        <div className="home__texts__button">
          <a href="#menu">
            <Button text={"Reserva tu Fruit Burst!"} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
