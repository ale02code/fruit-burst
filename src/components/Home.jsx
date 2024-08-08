import React from "react";
import ImgPresentation from "../assets/imgs/presentation.jpeg";

function Home() {
  return (
    <section className="home">
      <img
        className="home__imgPresentation"
        src={ImgPresentation}
        alt="Presentation Image"
      />
      <div className="home__texts">
        <h1 className="home__texts__title">
          Sabor fresco Sabor natural
        </h1>
        <h2 className="home__texts__subtitle">
          {/* Somos una empresa que se dedica a crear bebidas frías cuidadosamente
          elaboradas, ofreciendo un excelente servicio y atención al cliente,
           con mucha calidad e higiene en los productos. */}

          Bebidas frías cuidadosamente
          elaboradas, ofreciendo un excelente servicio y atención al cliente.
        </h2>
        <button className="home__texts__button">
          <a href="">Reserva tu Fruit Burst!</a>
        </button>
      </div>
    </section>
  );
}

export default Home;
