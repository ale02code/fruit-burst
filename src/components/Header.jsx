import React, { useState, useEffect } from "react";
import MenuIcon from "../assets/icons/hamburger-menu.png";
import Logo from "../assets/icons/logo-transparent.png";
import HomeIcon from "../assets/icons/home.svg";
import ReservationIcon from "../assets/icons/menu.svg";
import UbicationIcon from "../assets/icons/ubication.svg";
import ElementNav from "./ElementNav";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header className="container__header">
      <div className="container__header__primaryBar__content">
        <img
          className="container__header__primaryBar__content__menuIcon"
          src={MenuIcon}
          alt="Menu"
          onClick={handleMenu}
        />
        <h2 className="container__header__primaryBar__content__textTitle">
          Fruit <br></br> Burst
        </h2>
      </div>
      <div
        className={
          menu
            ? "container__header__close_menu"
            : "container__header__close_menu-close"
        }
        onClick={handleMenu}
      ></div>
      <aside
        className={
          menu
            ? "container__header__secondBar"
            : "container__header__secondBar-close"
        }
      >
        <nav className="container__header__secondBar__content">
          <img
            className="container__header__secondBar__content__logo"
            src={Logo}
            alt="Fruit Burst Logo"
          />
          <div
            onClick={handleMenu}
            className="container__header__secondBar__content__ElementsNav"
          >
            <ElementNav img={HomeIcon} text={"Inicio"} reference={"#home"} />
            <ElementNav
              img={ReservationIcon}
              text={"Menu"}
              reference={"#menu"}
            />
            <ElementNav
              img={UbicationIcon}
              text={"Ubicación"}
              reference={"#ubication"}
            />
            <section className="container__header__secondBar__content__ElementsNav__languages">
              <div className="container__header__secondBar__content__ElementsNav__languages__ES">
                ES
              </div>
              <div className="container__header__secondBar__content__ElementsNav__languages__EN">
                EN
              </div>
            </section>
          </div>
          <small>Fruit Burst S.A de C.V.</small>
        </nav>
      </aside>
    </header>
  );
}

export default Header;
